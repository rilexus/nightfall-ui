import React, {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { Ease, ZoomInTransition } from "react-transitions-library";

export function useIsMounted() {
  const isMountedRef = useRef(true);
  const isMounted = useCallback(() => isMountedRef.current, []);

  useEffect(() => {
    return () => void (isMountedRef.current = false);
  }, []);

  return isMounted;
}

const useTimeoutToggle = (
  initialValue: boolean,
  timeout: number
): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);
  const timeoutRef = useRef<any>(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggle = useCallback(() => {
    setValue((v) => {
      timeoutRef.current = setTimeout(() => {
        if (isMounted()) {
          setValue((v) => !v);
        }
      }, timeout);
      return !v;
    });
  }, []);

  return [value, toggle];
};

const ButtonJumpTransition: FunctionComponent<
  PropsWithChildren<{
    delay?: number;
    from?: number;
    to?: number;
    ease?: Ease;
    timeout?: number;
    disabled?: boolean;
  }>
> = ({
  children,
  from = 1,
  to = 1.1,
  ease = Ease.ease,
  delay = 0,
  timeout = 150,
  disabled,
}) => {
  const [_in, toggle] = useTimeoutToggle(false, timeout);
  const inlineBlock = useCSSProperties({ display: "inline-block" }, []);
  return (
    <ZoomInTransition
      in={_in && !disabled}
      from={from}
      to={to}
      onMouseUp={toggle}
      timeout={timeout}
      ease={ease}
      delay={delay}
      style={inlineBlock}
    >
      {children}
    </ZoomInTransition>
  );
};

export { ButtonJumpTransition };
