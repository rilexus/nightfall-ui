import React, { FC, ReactNode } from "react";
import { TransitionGroup } from "react-transition-group";
import {
  BackdropTransition,
  Ease,
  FadeInTransition,
  ZoomInTransition,
} from "react-transitions-library";
import { useClickOutside, useCSSProperties } from "@nightfall-ui/hooks";

const BackgroundTransition: FC = ({ children, ...props }) => {
  const timeout = 700;
  const blur = 10;
  return (
    <BackdropTransition
      {...props}
      from={"0px"}
      to={`${blur}px`}
      timeout={timeout}
      ease={Ease.easeOutQuint}
      backgroundColor={"#00000001"}
      style={{
        position: "fixed",
        inset: 0,
      }}
    >
      {children}
    </BackdropTransition>
  );
};

const ContentTransition: FC = ({ children, ...props }) => {
  const timeout = 400;
  return (
    <ZoomInTransition {...props} from={0.9} to={1} timeout={timeout}>
      <FadeInTransition {...props} from={0} to={1} timeout={timeout}>
        {children}
      </FadeInTransition>
    </ZoomInTransition>
  );
};

const Dialog: FC<{
  open: boolean;
  onClose: () => void;
  element: ReactNode;
}> = ({ children, onClose, open, element }) => {
  const ref = useClickOutside<HTMLDivElement>(() => {
    if (open) {
      onClose();
    }
  });
  const contentStyle = useCSSProperties(
    {
      position: "absolute",
      top: "50%",
      transform: `translate(-50%, -75%)`,
      left: "50%",
    },
    []
  );
  const wrapperStyle = useCSSProperties(
    {
      position: "relative",
    },
    []
  );
  return (
    <div style={wrapperStyle}>
      <ZoomInTransition in={open} from={1} to={0.95} timeout={700}>
        {children}
      </ZoomInTransition>
      <TransitionGroup>
        {open && <BackgroundTransition key={"background"} />}
        {open && (
          <ContentTransition key={"content"}>
            <div ref={ref} style={contentStyle}>
              {element}
            </div>
          </ContentTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export { Dialog };
