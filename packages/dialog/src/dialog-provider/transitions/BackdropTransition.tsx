import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";
import { TransitionProps } from "react-transition-group/Transition";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { Transition } from "react-transitions-library";

type BackdropTransitionProps = {
  from: string;
  to: string;
  backgroundColor: string;
} & TransitionProps;

/**
 * NOTE: css backdrop-filter transition is a ducking bitch!
 * It does not play well with other transitions. Especially with the opacity.
 * */
const BackdropTransition: ForwardRefExoticComponent<BackdropTransitionProps> =
  forwardRef<HTMLElement, BackdropTransitionProps>(
    (
      {
        timeout,
        delay = 0,
        to,
        ease = "ease",
        from,
        backgroundColor,
        children,
        ...props
      },
      outsideRef
    ) => {
      const defaultStyle = useCSSProperties(
        {
          willChange: "backdrop-filter",
          backgroundColor,
          transition: `backdrop-filter ${timeout}ms ${ease} ${delay}ms, 
          -webkit-backdrop-filter ${timeout}ms ${ease} ${delay}ms`,
        },
        [timeout, delay]
      );

      const transitionStyle = useMemo(
        () => ({
          entering: {
            WebkitBackdropFilter: `blur(${to}) brightness(80%)`,
            backdropFilter: `blur(${to}) brightness(80%)`,
          },
          entered: {
            WebkitBackdropFilter: `blur(${to}) brightness(80%)`,
            backdropFilter: `blur(${to}) brightness(80%)`,
          },
          exiting: {
            WebkitBackdropFilter: `blur(${from}) brightness(100%)`,
            backdropFilter: `blur(${from})`,
          },
          exited: {
            WebkitBackdropFilter: `blur(${from}) brightness(100%)`,
            backdropFilter: `blur(${from})`,
          },
        }),
        [from, to]
      );
      return (
        <Transition
          {...props}
          timeout={timeout}
          //@ts-ignore
          ref={outsideRef}
          defaultStyle={defaultStyle}
          transitionStyle={transitionStyle}
          className={"BackdropTransition"}
        >
          {children}
        </Transition>
      );
    }
  );
BackdropTransition.displayName = "BackdropTransition";
export { BackdropTransition };
