import React, { FC, ReactNode, useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup } from "react-transition-group";
import {
  BackdropTransition,
  Ease,
  FadeInTransition,
  ZoomInTransition,
} from "react-transitions-library";
import { useCSSProperties } from "@nightfall-ui/hooks";

const BackgroundTransition: FC<{ onClick?: () => void }> = ({
  children,
  ...props
}) => {
  const timeout = 700;
  const blur = 10;
  const wrapperStyle = useCSSProperties(
    {
      position: "fixed",
      inset: "0",
    },
    []
  );
  return (
    <BackdropTransition
      {...props}
      from={"0px"}
      to={`${blur}px`}
      timeout={timeout}
      ease={Ease.easeOutQuint}
      backgroundColor={"#00000001"}
      style={wrapperStyle}
    >
      {children}
    </BackdropTransition>
  );
};

const ContentTransition: FC = ({ children, ...props }) => {
  const timeout = 400;
  const wrapperStyle = useCSSProperties(
    {
      position: "fixed",
      inset: "0",
    },
    []
  );
  return (
    <ZoomInTransition
      {...props}
      from={0.9}
      to={1}
      timeout={timeout}
      style={wrapperStyle}
    >
      <FadeInTransition
        {...props}
        from={0}
        to={1}
        timeout={timeout}
        style={wrapperStyle}
      >
        {children}
      </FadeInTransition>
    </ZoomInTransition>
  );
};

const Portal: FC<{ container: any }> = ({ children, container }) => {
  return ReactDOM.createPortal(children, container);
};

let containerId = -1;

const Dialog: FC<{
  open: boolean;
  element: ReactNode;
  onOutsideClick?: () => void;
}> = ({ children, onOutsideClick, open, element }) => {
  const contentStyle = useCSSProperties(
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    []
  );
  const wrapperStyle = useCSSProperties(
    {
      position: "relative",
    },
    []
  );

  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const id = ++containerId;
    const elementId = `dialog-${id}`;
    const container = document.createElement("div");
    container.setAttribute("id", elementId);
    containerRef.current = container;
    document.body.appendChild(containerRef.current);

    return () => {
      const node = document.getElementById(elementId);
      document.body.removeChild(node as any);
    };
  }, []);

  return (
    <div style={wrapperStyle}>
      <ZoomInTransition in={open} from={1} to={0.9} timeout={700}>
        {children}
      </ZoomInTransition>
      {containerRef.current && (
        <Portal container={containerRef.current}>
          <TransitionGroup>
            {open && (
              <BackgroundTransition
                key={"background"}
                onClick={onOutsideClick}
              />
            )}
            {open && (
              <ContentTransition key={"content"}>
                <div style={contentStyle}>{element}</div>
              </ContentTransition>
            )}
          </TransitionGroup>
        </Portal>
      )}
    </div>
  );
};

export { Dialog };
