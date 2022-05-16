import { useCallback, useEffect, useRef } from "react";
// eslint-disable-next-line
import "../../libs/Eventbus";

const useEventBus = (type: string, callback?: (...args: any) => void) => {
  const ref = useRef<any>(callback);
  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(() => {
    const handle = (...args: any) => {
      ref.current?.(...args);
    };
    if (ref.current) {
      // eslint-disable-next-line
      // @ts-ignore
      window?.eventbus?.addListener(type, handle);
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line
        // @ts-ignore
        window?.eventbus?.removeListener(type, handle);
      }
    };
  }, [ref, type]);

  return useCallback(
    (value) => {
      // eslint-disable-next-line
      // @ts-ignore
      window?.eventbus?.emit(type, value);
    },
    [type]
  );
};

export default useEventBus;
