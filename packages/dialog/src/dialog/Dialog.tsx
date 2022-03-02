import React, { CSSProperties, FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup } from "react-transition-group";
import { FadeInTransition, ZoomInTransition } from "react-transitions-library";
import { useCallbackRef, useCSSProperties } from "@nightfall-ui/hooks";
import { DialogContext, useDialogContext } from "../dialog-provider";

const ContentTransition: FC<any> = ({ children, onExited, ...props }) => {
  const timeout = 400;

  return (
    <ZoomInTransition {...props} from={0.9} to={1} timeout={timeout}>
      <FadeInTransition
        {...props}
        onExited={onExited}
        from={0}
        to={1}
        timeout={timeout}
      >
        {children}
      </FadeInTransition>
    </ZoomInTransition>
  );
};

const Portal: FC<{ container: any }> = ({ children, container }) => {
  return ReactDOM.createPortal(children, container);
};

const Dialog: FC<{
  style?: CSSProperties;
  open: boolean;
  onOutsideClick?: () => void;
}> = ({ open, children, style }) => {
  const context = useDialogContext();
  const setOpen = context?.[1] || (() => {});

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const contentStyle = useCSSProperties(
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      position: "relative",
      ...style,
    },
    [style]
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
      const container = document.createElement("div");
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
    <DialogContext.Provider value={null}>
      <div style={wrapperStyle}>
        {containerRef.current && (
          <Portal container={containerRef.current}>
            <div
              style={{
                position: "fixed",
                inset: 0,
              }}
            >
              <div style={contentStyle}>
                <TransitionGroup>
                  {open && (
                    <ContentTransition key={"content"} onExited={onExited}>
                      <div>{children}</div>
                    </ContentTransition>
                  )}
                </TransitionGroup>
              </div>
            </div>
          </Portal>
        )}
      </div>
    </DialogContext.Provider>
  );
};

export { Dialog };
