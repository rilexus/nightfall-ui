import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { Ease, ZoomInTransition } from "react-transitions-library";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { TransitionGroup } from "react-transition-group";
import { BackdropTransition } from "./transitions/BackdropTransition";

const DialogContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | null
>([false, () => {}]);

const useDialogContext = () => useContext(DialogContext);

const BackgroundTransition: FunctionComponent<
  PropsWithChildren<{
    blur?: { from: string; to: string; timeout: number };
  }>
> = ({
  children,
  blur = { from: "0px", to: "15px", timeout: 700 },
  ...props
}) => {
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
      from={blur.from}
      to={blur.to}
      timeout={blur.timeout}
      ease={Ease.easeOutQuint}
      backgroundColor={"#00000001"}
      style={wrapperStyle}
    >
      {children}
    </BackdropTransition>
  );
};

const DialogProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const contextValue = useMemo<any>(() => [open, setOpen], [open]);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogBackgroundTransition: FunctionComponent<
  PropsWithChildren<{
    zoom?: { from: number; to: number; timeout: number };
    blur?: { from: string; to: string; timeout: number };
  }>
> = ({
  children,
  zoom = { from: 1, to: 0.97, timeout: 700 },
  blur = { from: "0px", to: "5px", timeout: 700 },
}) => {
  //@ts-ignore
  const [open] = useDialogContext();

  return (
    <div>
      <ZoomInTransition
        in={open}
        from={zoom.from}
        to={zoom.to}
        timeout={zoom.timeout}
      >
        {children}
      </ZoomInTransition>
      <TransitionGroup>
        {open && <BackgroundTransition key={"background"} blur={blur} />}
      </TransitionGroup>
    </div>
  );
};

export {
  DialogProvider,
  useDialogContext,
  DialogBackgroundTransition,
  DialogContext,
};
