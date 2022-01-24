import React, { FC, ReactNode, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import {
  bold2XLCss,
  extraBold2XLCss,
  regular2XLCss,
  regularCss,
  semiBold2XLCss,
  thin2XLCss,
  ultraThin2XLCss,
} from "@nightfall-ui/typography";
import {
  Accordion,
  AccordionBody,
  AccordionHead,
} from "@nightfall-ui/accordion";
import { Focusable, useFocusContext } from "../../components/focusable";
import { IoResizeSharp } from "react-icons/io5";
import { useCSSStyle } from "react-transitions-library";
import { RegularSubtypes } from "./RegularSubtypes";
import { Hr, Li, Ul } from "../../components";
import { UltraThinSubtypes } from "./UltraThinSubtypes";
import { useClickOutside } from "@nightfall-ui/hooks";

const H2 = styled.h2`
  margin: 1rem 0;
  ${bold2XLCss};
`;

const H4 = styled.h4`
  ${regularCss};
`;

const RegularFontSize = styled.div`
  ${regular2XLCss};
`;

const ThinFontSize = styled.div`
  ${thin2XLCss};
`;

const UltraThinFontSize = styled.div`
  ${ultraThin2XLCss};
`;

const BoldFontSize = styled.div`
  ${bold2XLCss};
`;

const SemiBoldFontSize = styled.div`
  ${semiBold2XLCss};
`;

const ExtraBoldFontSize = styled.div`
  ${extraBold2XLCss};
`;

const ControlledAccordion: FC<{
  head: ReactNode;
  body: ReactNode | ((open: boolean) => ReactNode);
  id: string;
}> = ({ head, body, id }) => {
  const accordionHandlersRef = useRef<any>();

  const { focus, reset } = useFocusContext();
  const [isOpen, setOpen] = useState(false);

  const headId = `${id}-head`;
  const bodyId = `${id}-body`;
  const arrowId = `${id}-arrow`;
  const lineId = `${id}-line`;

  const close = useCallback(() => {
    setOpen(false);
    accordionHandlersRef.current.close();
  }, []);

  const open = useCallback(() => {
    setOpen(true);
    accordionHandlersRef.current.open();
  }, []);

  const handleClick = useCallback(() => {
    if (isOpen) {
      reset();
      close();
      // accordionHandlersRef.current.close();
    } else {
      focus([bodyId, arrowId, headId, lineId]);
      open();
      // accordionHandlersRef.current.open();
    }
  }, [bodyId, focus, reset, open, close, isOpen, arrowId, headId, lineId]);

  const bodyRef = useClickOutside<HTMLDivElement>(() => {
    if (isOpen) {
      close();
      reset();
    }
  });

  const scaleStyle = useCSSStyle(
    {
      transition: "transform 400ms",
      transform: `translateY(80%) scale(${isOpen ? 1.5 : 1})`,
      color: "white",
    },
    [isOpen]
  );
  const flexStyle = useCSSStyle(
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    []
  );

  return (
    <Accordion ref={accordionHandlersRef}>
      <AccordionHead
        style={{
          cursor: "pointer",
        }}
      >
        <div>
          <div onClick={handleClick} style={flexStyle}>
            <div>
              <Focusable id={headId}>{head}</Focusable>
            </div>
            <div style={scaleStyle}>
              <Focusable id={arrowId}>
                <IoResizeSharp />
              </Focusable>
            </div>
          </div>
          <Focusable id={lineId}>
            <Hr />
          </Focusable>
        </div>
      </AccordionHead>
      <Focusable id={bodyId}>
        <AccordionBody ref={bodyRef}>
          {typeof body === "function" ? body(isOpen) : body}
        </AccordionBody>
      </Focusable>
    </Accordion>
  );
};

const FontWeightExamples = () => {
  return (
    <div>
      <Focusable id={"font-weight-h2"}>
        <H2>Font Weight</H2>
      </Focusable>
      <Ul>
        <Li>
          {/*<Hr />*/}
          <ControlledAccordion
            id={"ultraThin"}
            head={
              <div>
                <H4>Ultra Thin 2XL</H4>
                <UltraThinFontSize>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </UltraThinFontSize>
              </div>
            }
            body={(open) => (
              <div>
                <UltraThinSubtypes animate={open} />
              </div>
            )}
          />
        </Li>
        <Li>
          {/*<Hr />*/}
          <ControlledAccordion
            id={"thin"}
            head={
              <div>
                <H4>Thin 2XL</H4>
                <ThinFontSize>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </ThinFontSize>
              </div>
            }
            body={<div></div>}
          />
        </Li>
        <Li>
          {/*<Hr />*/}
          <ControlledAccordion
            id={"regular"}
            head={
              <div>
                <H4>Regular 2XL</H4>
                <RegularFontSize>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </RegularFontSize>
              </div>
            }
            body={(open) => (
              <div>
                <RegularSubtypes animate={open} />
              </div>
            )}
          />
        </Li>
        <Li>
          <ControlledAccordion
            head={
              <div>
                <H4>Semi Bold</H4>
                <SemiBoldFontSize>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </SemiBoldFontSize>
              </div>
            }
            body={<div />}
            id={"semiBold"}
          />
        </Li>
        <Li>
          <ControlledAccordion
            head={
              <div>
                <H4>Bold</H4>
                <BoldFontSize>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </BoldFontSize>
              </div>
            }
            body={<div />}
            id={"bold"}
          />
        </Li>
        <Li>
          <ControlledAccordion
            head={
              <div>
                <H4>Extra Bold</H4>
                <ExtraBoldFontSize>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </ExtraBoldFontSize>
              </div>
            }
            body={<div />}
            id={"extra-bold"}
          />
        </Li>
      </Ul>
    </div>
  );
};

export { FontWeightExamples };
