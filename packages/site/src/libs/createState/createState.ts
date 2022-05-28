import { useCallback, useEffect, useReducer } from "react";

/**
 * Creates a state which is shared between components through a hook.
 * @param initialState
 * @param enhancer
 */
function createState<State = any>(
  initialState: State | (() => State),
  enhancer?: any
) {
  let state =
    // eslint-disable-next-line
    // @ts-ignore
    typeof initialState === "function" ? initialState() : initialState;

  let listeners: any[] = [];

  const setState = (newState: any) => {
    state = typeof newState === "function" ? newState(state) : newState;
    // notify listeners
    listeners.forEach((l) => l());
  };

  if (enhancer) {
    return enhancer(createState)(initialState);
  }

  return (): [State, (newState: State | ((s: State) => State)) => void] => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, rerender] = useReducer((s) => !s, false);

    useEffect(() => {
      listeners.push(rerender);

      return () => {
        listeners = listeners.filter((l) => l !== rerender);
      };
      // eslint-disable-next-line
    }, []);

    const set = useCallback(
      (newState: State | ((newState: State) => State)) => {
        setState(newState);
      },
      []
    );
    return [state, set];
  };
}

export default createState;
