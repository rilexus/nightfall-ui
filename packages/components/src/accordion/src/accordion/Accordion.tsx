import React, {
  createContext,
  FC,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  BlurTransition,
  Ease,
  FadeInTransition,
  useCSSStyle,
  ZoomInTransition,
} from "react-transitions-library";
import styled from "styled-components";

const AccordionContext = createContext<boolean>(false);
const useAccordionContext = () => {
  return useContext(AccordionContext);
};

const Accordion = forwardRef<any, { children: ReactNode }>(
  ({ children }, ref) => {
    const [_open, _setOpen] = useState(false);

    useImperativeHandle(
      ref,
      () => {
        return {
          isOpen: _open,
          open: () => {
            if (!_open) {
              _setOpen(true);
            }
          },
          close: () => {
            if (_open) {
              _setOpen(false);
            }
          },
        };
      },
      [_open]
    );
    return (
      <AccordionContext.Provider value={_open}>
        {children}
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

type AccordionHeadProps = {
  from?: number;
  to?: number;
  timeout?: number;
  ease?: Ease;
  transformOrigin?: string;
};

const Hover = styled.div`
  transition: transform 400ms;
  transform: scale(1);
  &:hover {
    transform: scale(1.03);
  }
`;

const AccordionHead: FC<
  HTMLAttributes<HTMLDivElement> & AccordionHeadProps
> = ({
  children,
  from = 1,
  to = 1.1,
  timeout = 400,
  ease = Ease.ease,
  transformOrigin = "0px 0px",
  ...props
}) => {
  const open = useAccordionContext();

  return (
    <Hover {...props}>
      <ZoomInTransition
        from={from}
        to={to}
        timeout={timeout}
        transformOrigin={transformOrigin}
        ease={ease}
        in={open}
      >
        {children}
      </ZoomInTransition>
    </Hover>
  );
};

const AccordionBody = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, outsideRef) => {
    const divRef = useRef<HTMLDivElement>(null);
    const open = useAccordionContext();

    const style = useCSSStyle(
      {
        transition: `height ${open ? 400 : 600}ms ${
          open ? Ease.easeInOutQuart : Ease.easeOutExpo
        } ${open ? 0 : 100}ms`,
        height: `${open ? divRef.current?.clientHeight : 0}px`,
        overflowY: "hidden",
      },
      [open]
    );

    return (
      // @ts-ignore
      <AccordionContext.Provider value={null}>
        <div style={style} ref={outsideRef}>
          <div ref={divRef}>
            <FadeInTransition from={0} to={1} timeout={1200} in={open}>
              <BlurTransition to={"0px"} from={"15px"} in={open} timeout={400}>
                <ZoomInTransition
                  from={0.8}
                  to={1}
                  ease={Ease.easeOutQuint}
                  timeout={1000}
                  in={open}
                >
                  {children}
                </ZoomInTransition>
              </BlurTransition>
            </FadeInTransition>
          </div>
        </div>
      </AccordionContext.Provider>
    );
  }
);
AccordionBody.displayName = "AccordionBody";

export { Accordion, AccordionHead, AccordionBody };
