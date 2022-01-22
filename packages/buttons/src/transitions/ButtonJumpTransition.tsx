import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { Ease, ZoomInTransition } from "react-transitions-library";

const useTimeoutToggle = (
  initialValue: boolean,
  timeout: number
): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);
  const timeoutRef = useRef<any>();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggle = useCallback(() => {
    setValue((v) => {
      timeoutRef.current = setTimeout(() => {
        setValue((v) => !v);
      }, timeout);
      return !v;
    });
  }, []);

  return [value, toggle];
};

const ButtonJumpTransition: FC<{
  delay?: number;
  from?: number;
  to?: number;
  ease?: Ease;
  timeout?: number;
}> = ({
  children,
  from = 1,
  to = 1.1,
  ease = Ease.ease,
  delay = 0,
  timeout = 150,
}) => {
  const [_in, toggle] = useTimeoutToggle(false, timeout);
  const inlineBlock = useCSSProperties({ display: "inline-block" }, []);
  return (
    <ZoomInTransition
      in={_in}
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
