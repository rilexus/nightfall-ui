import { useCallback } from "react";

const localStorageEnhancer = (key: string) => {
  return (createState: any) => {
    return (initialState: any) => {
      const storageValue = localStorage.getItem(key);

      if (!storageValue) {
        try {
          // If no value in storage, save initialState to storage
          localStorage.setItem(key, JSON.stringify({ state: initialState }));
        } catch (e) {
          console.error(
            "Initial state could not be saved to the localStorage!"
          );
        }
      }

      // If storage value exist, take it to create a store, otherwise use initialState.
      let value = null;
      try {
        value = !!storageValue ? JSON.parse(storageValue).state : initialState;
      } catch (e) {
        // fallback to the initialState, if parsing fails.
        value = initialState;
      }

      const hook = createState(value);

      return () => {
        const [value, setHookState] = hook();

        const set = useCallback(
          (valueOrFunction: any) => {
            setHookState((oldState: any) => {
              const newState =
                typeof valueOrFunction === "function"
                  ? valueOrFunction(oldState)
                  : valueOrFunction;
              try {
                localStorage.setItem(key, JSON.stringify({ state: newState }));
              } catch (e) {
                console.error(
                  "Initial state could not be saved to the localStorage!"
                );
              }
              return newState;
            });
          },
          [setHookState]
        );

        return [value, set];
      };
    };
  };
};

export default localStorageEnhancer;
