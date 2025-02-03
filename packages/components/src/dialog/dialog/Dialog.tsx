import React, {
  CSSProperties,
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { TransitionGroup } from "react-transition-group";
import { FadeInTransition, ZoomInTransition } from "react-transitions-library";
import { useCallbackRef, useCSSProperties } from "@nightfall-ui/hooks";
import { DialogContext, useDialogContext } from "../dialog-provider";

const ContentTransition: FunctionComponent<PropsWithChildren<any>> = ({
  children,
  onExited,
  ...props
}) => {
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

const Portal: FunctionComponent<PropsWithChildren<{ container: any }>> = ({
  children,
  container,
}) => {
  return ReactDOM.createPortal(children, container);
};

type DialogProps = PropsWithChildren<{
  style?: CSSProperties;
  open?: boolean;
  onOutsideClick?: () => void;
  onExited?: () => void;
}>;

export type DialogHandlers = {
  open: () => void;
  close: () => void;
};

const Dialog: ForwardRefExoticComponent<DialogProps> = forwardRef<
  DialogHandlers,
  DialogProps
>(({ open, children, style, onExited, onOutsideClick }, outsideRef) => {
  const context = useDialogContext();
  const setOpen = context?.[1] || ((value: any) => {});

  const [internalIsOpen, setInternalIsOpen] = useState(false);

  useImperativeHandle(
    outsideRef,
    (): DialogHandlers => {
      return {
        open: () => {
          setInternalIsOpen(true);
        },
        close: () => {
          setInternalIsOpen(false);
        },
      };
    },
    []
  );

  const isOpen = !!open ? open : internalIsOpen;

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

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
    if (isOpen) {
      const container = document.createElement("div");
      containerRef.current = container;
      document.body.appendChild(container);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current?.remove();
      }
    };
  }, [isOpen]);

  const removeContainer = useCallback(() => {
    onExited?.();
    containerRef.current?.remove();
  }, []);

  return (
    <DialogContext.Provider value={null}>
      <div style={wrapperStyle} onClick={onOutsideClick}>
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
                  {isOpen && (
                    <ContentTransition
                      key={"content"}
                      onExited={removeContainer}
                    >
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
});

export { Dialog };
