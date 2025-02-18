import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { collapseToast } from './collapseToast';
import { Default } from './constant';
import { ToastTransitionProps } from '../types';
import { getContainers } from '../core/store';

export interface CSSTransitionProps {
  /**
   * Css class to apply when toast enter
   */
  enter: string;

  /**
   * Css class to apply when toast leave
   */
  exit: string;

  /**
   * Append current toast position to the classname.
   * If multiple classes are provided, only the last one will get the position
   * For instance `myclass--top-center`...
   * `Default: false`
   */
  appendPosition?: boolean;

  /**
   * Collapse toast smoothly when exit animation end
   * `Default: true`
   */
  collapse?: boolean;

  /**
   * Collapse transition duration
   * `Default: 300`
   */
  collapseDuration?: number;
}

const enum AnimationStep {
  Enter,
  Exit
}

/**
 * Css animation that just work.
 * You could use animate.css for instance
 *
 *
 * ```
 * cssTransition({
 *   enter: "animate__animated animate__bounceIn",
 *   exit: "animate__animated animate__bounceOut"
 * })
 * ```
 *
 */
export function cssTransition({
  enter,
  exit,
  appendPosition = false,
  collapse = true,
  collapseDuration = Default.COLLAPSE_DURATION
}: CSSTransitionProps) {
  return function ToastTransition({
    children,
    position,
    preventExitTransition,
    done,
    disableEnterAnimation,
    nodeRef,
    isIn,
    playToast,
    toastId
  }: ToastTransitionProps) {
    const enterClassName = disableEnterAnimation
      ? null
      : appendPosition
        ? `${enter}--${position}`
        : enter;
    const exitClassName = appendPosition ? `${exit}--${position}` : exit;
    const animationStep = useRef(AnimationStep.Enter);

    useLayoutEffect(() => {
      if (!enterClassName) {
        playToast();
        return;
      }

      const node = nodeRef.current!;
      const classToToken = enterClassName.split(' ');

      const onEntered = (e: AnimationEvent) => {
        if (e.target !== nodeRef.current) return;

        const someElementsPaused = Array.from(getContainers().values()).find(
          c => c.toasts.get(toastId) && c.isPaused()
        );

        if (!someElementsPaused) playToast();

        node.removeEventListener('animationend', onEntered);
        node.removeEventListener('animationcancel', onEntered);
        if (
          animationStep.current === AnimationStep.Enter &&
          e.type !== 'animationcancel'
        ) {
          node.classList.remove(...classToToken);
        }
      };

      const onEnter = () => {
        node.classList.add(...classToToken);
        node.addEventListener('animationend', onEntered);
        node.addEventListener('animationcancel', onEntered);
      };

      onEnter();
    }, []);

    useEffect(() => {
      const node = nodeRef.current!;

      const onExited = () => {
        node.removeEventListener('animationend', onExited);
        collapse ? collapseToast(node, done, collapseDuration) : done();
      };

      const onExit = () => {
        animationStep.current = AnimationStep.Exit;
        node.className += ` ${exitClassName}`;
        node.addEventListener('animationend', onExited);
      };

      if (!isIn) preventExitTransition ? onExited() : onExit();
    }, [isIn]);

    return <>{children}</>;
  };
}
