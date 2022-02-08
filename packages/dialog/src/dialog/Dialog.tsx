import React, { FC, ReactNode, useEffect, useRef, VFC } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup } from "react-transition-group";
import { FadeInTransition, ZoomInTransition } from "react-transitions-library";
import { useCallbackRef, useCSSProperties } from "@nightfall-ui/hooks";
import { useDialogContext } from "../dialog-provider";

const ContentTransition: FC<any> = ({ children, onExited, ...props }) => {
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
        onExited={onExited}
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

const Dialog: VFC<{
  open: boolean;
  element: ReactNode;
  onOutsideClick?: () => void;
}> = ({ open, element }) => {
  const [_, setOpen] = useDialogContext();

  useEffect(() => {
    setOpen(open);
  }, [open]);

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
    return () => {
      containerRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (open) {
      const id = ++containerId;
      const elementId = `dialog-${id}`;
      const container = document.createElement("div");
      container.setAttribute("id", elementId);
      containerRef.current = container;
      document.body.appendChild(container);
    }
  }, [open]);

  const removeContainerRef = useCallbackRef(() => {
    containerRef.current?.remove();
  });

  const onExited = () => {
    // this callback is memoized by the Transition and does not have access to the updated "open" value
    removeContainerRef.current();
  };

  return (
    <div style={wrapperStyle}>
      {containerRef.current && (
        <Portal container={containerRef.current}>
          <TransitionGroup>
            {open && (
              <ContentTransition key={"content"} onExited={onExited}>
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
