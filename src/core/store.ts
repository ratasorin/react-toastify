import {
  Id,
  NotValidatedToastProps,
  OnChangeCallback,
  Toast,
  ToastContainerProps,
  ToastContent,
  ToastItem,
  ToastOptions
} from '../types';
import { Default, canBeRendered, isId } from '../utils';
import {
  ContainerObserver,
  createContainerObserver
} from './containerObserver';
import { toast } from './toast';

interface EnqueuedToast {
  content: ToastContent<any>;
  options: NotValidatedToastProps;
  toggle?: (play: boolean) => any;
}

interface ClearWaitingQueueParams {
  containerId?: Id;
}

interface RemoveParams {
  id?: Id;
  containerId: Id;
}

export const containers = new Map<Id, ContainerObserver>();
export let renderQueue: EnqueuedToast[] = [];
export const getContainers = () => containers;

const listeners = new Set<OnChangeCallback>();

const dispatchChanges = (data: ToastItem) => listeners.forEach(cb => cb(data));

const hasContainers = () => containers.size > 0;

function flushRenderQueue() {
  renderQueue.forEach(v => pushToast(v.content, v.options));
  renderQueue.length = 0;
}

export const getToast = (id: Id, { containerId }: ToastOptions) => {
  const foundToast = containers
    .get(containerId || Default.CONTAINER_ID)
    ?.toasts.get(id);
  const enqueuedToast = renderQueue.find(t => t.options.toastId == id);

  return {
    content: foundToast?.content || enqueuedToast?.content,
    props: foundToast?.props || enqueuedToast?.options,
    toggle: foundToast?.toggle || enqueuedToast?.toggle
  } as Toast;
};

export function isToastActive(id: Id, containerId?: Id) {
  if (containerId) return !!containers.get(containerId)?.isToastActive(id);

  let isActive = false;
  containers.forEach(c => {
    if (c.isToastActive(id)) isActive = true;
  });

  return isActive;
}

export function removeToast(params?: Id | RemoveParams) {
  if (!hasContainers()) {
    renderQueue = renderQueue.filter(
      v => params != null && v.options.toastId !== params
    );
    return;
  }

  if (params == null || isId(params)) {
    containers.forEach(c => {
      c.removeToast(params as Id);
    });
  } else if (params && ('containerId' in params || 'id' in params)) {
    const container = containers.get(params.containerId);
    container
      ? container.removeToast(params.id)
      : containers.forEach(c => {
          c.removeToast(params.id);
        });
  }
}

export function clearWaitingQueue(p: ClearWaitingQueueParams = {}) {
  containers.forEach(c => {
    if (c.getProps().limit && (!p.containerId || c.id === p.containerId)) {
      c.clearQueue();
    }
  });
}

let isProcessingQueue = false;
const interval = 600,
  bulkThreshold = 600;
let lastPushTime: number = 0;

const handleStackedLayout = (container: ContainerObserver) => {
  if (!isProcessingQueue) {
    isProcessingQueue = true;

    const intervalId = setInterval(() => {
      if (renderQueue.length === 0) {
        // Stop processing if the queue is empty
        clearInterval(intervalId);
        isProcessingQueue = false;
        return;
      }

      const now = Date.now();
      const timeSinceLastPush = now - lastPushTime;

      if (timeSinceLastPush >= bulkThreshold) {
        // Bulk build all toasts in the queue

        renderQueue.forEach(_toast => {
          if (
            // check if toast belongs to this container
            _toast.options.containerId !== container.id &&
            // if there is only one container, all toasts will belong to it!
            container.id !== Default.CONTAINER_ID
          )
            return;

          const newToast = container.buildToast(_toast.content, {
            ..._toast.options,
            disableEnterAnimation: true
          });

          if (container.isPaused()) {
            // delay 1 cycle to make sure components were mounted
            setTimeout(() => {
              toast.pause({ id: newToast?.props.toastId });
            }, 0);
          }
        });
        renderQueue.length = 0;
        clearInterval(intervalId);
        isProcessingQueue = false;
        return;
      }

      // Pull the next toast from the queue
      const nextToast = renderQueue.shift();

      if (!nextToast) return;

      if (
        // check if toast belongs to this container
        nextToast.options.containerId !== container.id &&
        // if there is only one container, all toasts will belong to it!
        container.id !== Default.CONTAINER_ID
      )
        return;

      const newToast = container.buildToast(nextToast.content, {
        ...nextToast.options,
        disableEnterAnimation: container.isPaused()
      });

      if (container.isPaused()) {
        // delay 1 cycle to make sure components were mounted
        setTimeout(() => {
          toast.pause({ id: newToast?.props.toastId });
        }, 0);
      }
    }, interval);
  }
};

export function pushToast<TData>(
  content: ToastContent<TData>,
  options: NotValidatedToastProps,
  toggle?: (play: boolean) => void
) {
  if (!canBeRendered(content)) return;

  renderQueue.push({ content, options, toggle });
  lastPushTime = Date.now();

  containers.forEach(container => {
    if (container.getProps().stacked) {
      handleStackedLayout(container);
    } else container.buildToast(content, options);
  });
}

interface ToggleToastParams {
  id?: Id;
  containerId?: Id;
}

type RegisterToggleOpts = {
  id: Id;
  containerId?: Id;
  fn: (v: boolean) => void;
};

export function registerToggle(opts: RegisterToggleOpts) {
  containers
    .get(opts.containerId || Default.CONTAINER_ID)
    ?.setToggle(opts.id, opts.fn);
}

export function toggleToast(v: boolean, opt?: ToggleToastParams) {
  containers.forEach(c => {
    if (opt == null || !opt?.containerId) {
      c.toggle(v, opt?.id);
    } else if (opt?.containerId === c.id) {
      c.toggle(v, opt?.id);
    }
  });
}

export function registerContainer(props: ToastContainerProps) {
  const id = props.containerId || Default.CONTAINER_ID;
  return {
    subscribe(notify: () => void) {
      const container = createContainerObserver(id, props, dispatchChanges);

      containers.set(id, container);
      const unobserve = container.observe(notify);
      flushRenderQueue();

      return () => {
        unobserve();
        containers.delete(id);
      };
    },
    setProps(p: ToastContainerProps) {
      containers.get(id)?.setProps(p);
    },
    getSnapshot() {
      return containers.get(id)?.getSnapshot();
    }
  };
}

export function onChange(cb: OnChangeCallback) {
  listeners.add(cb);

  return () => {
    listeners.delete(cb);
  };
}
