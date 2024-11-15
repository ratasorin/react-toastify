/**
 * The playground could use some love 💖. To the brave soul reading this
 * message, any help would be appreciated 🙏
 *
 * The code is full of bad assertion 😆
 */

import { Checkbox } from './Checkbox';
import { ContainerCode, ContainerCodeProps } from './ContainerCode';
import { Header } from './Header';
import { Radio } from './Radio';
import { ToastCode, ToastCodeProps } from './ToastCode';
import { flags, positions, themes, transitions, types } from './constants';

import { ChangeEvent, useCallback, useState } from 'react';
import '../../../scss/main.scss';
import {
  Id,
  ToastContainer,
  ToastContainerProps,
  ToastOptions,
  toast
} from '../../../src/index';
import { defaultProps } from '../../../src/components/ToastContainer';

// Attach to window. Can be useful to debug
// @ts-ignore
window.toast = toast;

const appDefaultState = {
  ...defaultProps,
  transitionType: 'bounce',
  type: 'default',
  progress: '',
  disableAutoClose: false,
  autoClose: 5000,
  theme: 'light',
  stacked: true,
  stackLimit: 4,
  hideProgressBar: false,
  position: 'bottom-right'
} as ToastOptions &
  ToastContainerProps & {
    disableAutoClose: boolean;
    transitionType: keyof typeof transitions;
  };

const App = () => {
  const [state, setState] = useState(appDefaultState);

  const [toastId, setToastId] = useState<Id | undefined>();
  const [resolvePromise, setResolvePromise] = useState(true);

  const handleReset = useCallback(
    () =>
      setState({
        ...appDefaultState
      }),
    []
  );

  const clearAll = useCallback(() => toast.dismiss(), []);

  const showToast = useCallback(() => {
    setToastId(() => {
      return state.type === 'default'
        ? toast('🦄 Wow so easy !', { progress: state.progress })
        : toast[state.type]('🚀 Wow so easy !', {
            progress: state.progress
          });
    });
  }, [state]);

  const firePromise = useCallback(() => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolvePromise ? resolve(null) : reject(null);
          setResolvePromise(!resolvePromise);
        }, 3000);
      }),
      {
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯'
      }
    );
  }, [resolvePromise, setResolvePromise]);

  const updateToast = useCallback(
    () => toast.update(toastId, { progress: state.progress }),
    [toastId, state]
  );

  const handleAutoCloseDelay = useCallback(
    (event: any) =>
      setState(s => ({
        ...s,
        autoClose: event.target.value > 0 ? parseInt(event.target.value, 10) : 1
      })),
    [setState]
  );

  const handleStackLimitChanged = useCallback(
    (event: any) => {
      const stackLimit = parseInt(event.target.value);
      setState(s => ({
        ...s,
        stackLimit: stackLimit > 0 ? stackLimit : 1
      }));
    },
    [setState]
  );

  const isDefaultProps = useCallback(() => {
    return (
      state.position === 'top-right' &&
      state.autoClose === 5000 &&
      state.disableAutoClose &&
      state.hideProgressBar &&
      state.newestOnTop &&
      state.rtl &&
      state.pauseOnFocusLoss &&
      state.pauseOnHover &&
      state.closeOnClick &&
      state.draggable &&
      state.theme === 'light'
    );
  }, [state]);

  const handleRadioOrSelect = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setState(state => ({
        ...state,
        [event.target.name]:
          event.target.name === 'limit'
            ? parseInt(event.target.value, 10)
            : event.target.value
      })),
    [setState]
  );

  const toggleCheckbox = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setState(state => ({
        ...state,
        [event.target.name]: !state[event.target.name]
      })),
    [setState]
  );

  const renderFlags = useCallback(() => {
    return flags.map(({ id, label }) => (
      <li key={id}>
        <Checkbox
          id={id}
          label={label}
          onChange={toggleCheckbox}
          checked={state[id]}
        />
      </li>
    ));
  }, [state]);

  return (
    <main>
      <Header />
      <div className="container">
        <p>
          By default, all toasts will inherit ToastContainer's props. Props
          defined on toast supersede ToastContainer's props. Props marked with *
          can only be set on the ToastContainer. The demo is not exhaustive,
          check the repo for more!
        </p>
        <section className="container__options">
          <div>
            <h3>Position</h3>
            <ul>
              <Radio
                options={positions}
                name="position"
                checked={state.position as string}
                onChange={handleRadioOrSelect}
              />
            </ul>
          </div>
          <div>
            <h3>Type</h3>
            <ul>
              <Radio
                options={types}
                name="type"
                checked={state.type}
                onChange={handleRadioOrSelect}
              />
            </ul>
          </div>
          <div>
            <h3>Options</h3>
            <div className="options_wrapper">
              <label htmlFor="autoClose">
                Delay
                <input
                  type="number"
                  name="autoClose"
                  id="autoClose"
                  value={state.autoClose as unknown as string}
                  onChange={handleAutoCloseDelay}
                  disabled={state.disableAutoClose}
                />
                ms
              </label>

              <label htmlFor="stackLimit">
                Stack Limit
                <input
                  type="number"
                  name="stackLimit"
                  id="stackLimit"
                  value={state.stackLimit as unknown as string}
                  onChange={handleStackLimitChanged}
                />
              </label>

              <label htmlFor="transition">
                Transition
                <select
                  name="transitionType"
                  id="transitionType"
                  onChange={handleRadioOrSelect}
                  value={state.transitionType}
                >
                  {Object.keys(transitions).map(k => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="theme">
                Theme
                <select
                  name="theme"
                  id="theme"
                  onChange={handleRadioOrSelect}
                  value={state.theme}
                >
                  {themes.map(k => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="progress">
                Progress
                <input
                  type="number"
                  name="progress"
                  id="progress"
                  value={state.progress}
                  onChange={handleRadioOrSelect}
                />
              </label>
              <label htmlFor="limit">
                Limit
                <input
                  type="number"
                  name="limit"
                  id="limit"
                  value={state.limit}
                  onChange={handleRadioOrSelect}
                />
              </label>
            </div>
            <ul>{renderFlags()}</ul>
          </div>
        </section>
        <section>
          <ContainerCode
            {...(state as unknown as ContainerCodeProps)}
            isDefaultProps={isDefaultProps() as boolean}
          />
          <ToastCode {...(state as unknown as ToastCodeProps)} />
        </section>
        <div className="cta__wrapper">
          <ul className="container__actions">
            <li>
              <button className="btn" onClick={showToast}>
                <span role="img" aria-label="show alert">
                  🚀
                </span>{' '}
                Show Toast
              </button>
            </li>
            <li>
              <button className="btn" onClick={firePromise}>
                Promise
              </button>
            </li>
            <li>
              <button className="btn" onClick={updateToast}>
                Update
              </button>
            </li>
            <li>
              <button className="btn bg-red" onClick={clearAll}>
                <span role="img" aria-label="clear all">
                  💩
                </span>{' '}
                Clear All
              </button>
            </li>
            <li>
              <button className="btn bg-blue" onClick={handleReset}>
                <span role="img" aria-label="reset options">
                  🔄
                </span>{' '}
                Reset
              </button>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer
        {...state}
        transition={transitions[state.transitionType]}
        autoClose={state.disableAutoClose ? false : state.autoClose}
      />
    </main>
  );
};

export { App };
