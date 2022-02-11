import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  BackdropTransition,
  Ease,
  ZoomInTransition,
} from "react-transitions-library";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { TransitionGroup } from "react-transition-group";

const Context = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([
  false,
  () => {},
]);

const useDialogContext = () => useContext(Context);

const BackgroundTransition: FC = ({ children, ...props }) => {
  const timeout = 700;
  const blur = 20;
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

const DialogProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const contextValue = useMemo<any>(() => [open, setOpen], [open]);

  return (
    <Context.Provider value={contextValue}>
      <ZoomInTransition in={open} from={1} to={0.95} timeout={700}>
        {children}
      </ZoomInTransition>
      <TransitionGroup>
        {open && <BackgroundTransition key={"background"} />}
      </TransitionGroup>
    </Context.Provider>
  );
};

export { DialogProvider, useDialogContext };
