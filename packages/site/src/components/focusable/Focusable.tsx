import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BlurTransition,
  useCSSStyle,
  ZoomOutTransition,
} from "react-transitions-library";

const BlurContext = createContext<{
  register: (id: string) => void;
  unregister: (id: string) => void;
  focus: (ids: string[]) => void;
  reset: () => void;
  blurred: {
    [key: string]: boolean;
  };
}>({
  register: () => {
    //
  },
  unregister: () => {
    //
  },
  focus: () => {
    //
  },
  reset: () => {
    //
  },
  blurred: {},
});

const useFocusContext = () => {
  return useContext(BlurContext);
};

const FocusProvider: FC = ({ children }) => {
  const [state, setState] = useState<{ blurred: { [id: string]: boolean } }>({
    blurred: {},
  });

  const register = useCallback((id: string) => {
    setState((s) => ({ ...s, blurred: { ...s.blurred, [id]: false } }));
  }, []);

  const unregister = useCallback((id: string) => {
    setState((s) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: _removed, ...blurred } = s.blurred;
      return { ...s, blurred };
    });
  }, []);

  const reset = useCallback(() => {
    setState((s) => {
      const blurred = Object.keys(s.blurred).reduce((acc, id) => {
        return { ...acc, [id]: false };
      }, {});
      return { ...s, blurred };
    });
  }, []);

  const focus = useCallback((ids: string[]) => {
    setState((s) => {
      const blurred = Object.keys(s.blurred).reduce((acc, id) => {
        if (ids.includes(id)) {
          return { ...acc, [id]: false };
        }
        return { ...acc, [id]: true };
      }, {});
      return { ...s, blurred };
    });
  }, []);

  const contextValue = useMemo(
    () => ({ register, unregister, blurred: state.blurred, focus, reset }),
    [state.blurred, register, unregister, focus, reset]
  );

  return (
    <BlurContext.Provider value={contextValue}>{children}</BlurContext.Provider>
  );
};

const Focusable: FC<{ id: string; from?: string; to?: string }> = ({
  children,
  from = "0px",
  to = "10px",
  id,
}) => {
  const { register, unregister, blurred } = useFocusContext();
  useEffect(() => {
    register(id);
    return () => {
      unregister(id);
    };
    //eslint-disable-next-line
  }, []);

  const isBlurred = blurred[id];

  const pointerStyle = useCSSStyle(
    {
      pointerEvents: isBlurred ? "none" : "inherit",
    },
    [isBlurred]
  );

  return (
    <BlurTransition
      id={id}
      from={from}
      to={to}
      in={isBlurred}
      timeout={400}
      style={pointerStyle}
    >
      <ZoomOutTransition
        from={1}
        to={0.9}
        in={isBlurred}
        timeout={400}
        //transformOrigin={"top left"}
      >
        {children}
      </ZoomOutTransition>
    </BlurTransition>
  );
};
export { Focusable, FocusProvider, useFocusContext };
