import React, {
  ComponentPropsWithoutRef,
  useEffect,
  Children,
  cloneElement,
  ForwardRefExoticComponent,
  forwardRef,
} from "react";
import { useMouseOver, useMousePosition } from "@nightfall-ui/hooks";
import { mergeRefs } from "@nightfall-ui/utils";
import styled from "styled-components";

interface GlowCaptureProps extends ComponentPropsWithoutRef<"div"> {
  size?: string;
  textColorMix?: {
    color: string;
    alpha: number;
  };
  backgroundColorMix?: {
    color: string;
    alpha: number;
  };
  borderColorMix?: {
    color: string;
    alpha: number;
  };
}

const Grid = styled.div`
  display: grid;
  & > * {
    grid-area: 1/1;
  }
`;

const Mask = styled.div`
  mask: radial-gradient(
    var(--size, 25rem) var(--size, 25rem) at
      calc(var(--x, -99999px) - var(--offsetLeft, 0px))
      calc(var(--y, -99999px) - var(--offsetTop, 0px)),
    #000000 1%,
    transparent 50%
  );
  pointer-events: none;
  transition: mask 400ms ease, opacity 200ms ease;
  will-change: mask, opacity;
`;

const RadialMask: ForwardRefExoticComponent<any> = forwardRef(
  (props: GlowCaptureProps, outsideRef) => {
    const {
      children,
      backgroundColorMix,
      size = "45rem",
      textColorMix,
      borderColorMix,
    } = props;
    const [{ elementX, elementY }, element] = useMousePosition();
    const [isOver, mouseOverRef] = useMouseOver();

    useEffect(() => {
      element.current?.style.setProperty("--size", size);
      element.current?.style.setProperty("--x", `${elementX}px`);
      element.current?.style.setProperty("--y", `${elementY}px`);
      element.current?.style.setProperty(
        "--offsetTop",
        `${element.current?.offsetTop}px`
      );
      element.current?.style.setProperty(
        "--offsetLeft",
        `${element.current?.offsetLeft}px`
      );
    }, [size, elementY, elementX]);

    useEffect(() => {
      const observer = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          element.current?.style.setProperty(
            "--offsetTop",
            `${element.current?.offsetTop}px`
          );
          element.current?.style.setProperty(
            "--offsetLeft",
            `${element.current?.offsetLeft}px`
          );
        });
      });

      if (element.current) {
        observer.observe(element.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <Grid ref={mergeRefs(mouseOverRef, element, outsideRef)}>
        <div>{children}</div>
        <Mask
          style={{
            opacity: isOver ? 1 : 0,
          }}
        >
          {Children.map(children, (child) =>
            // @ts-ignore
            cloneElement(child, {
              style: {
                borderColor: borderColorMix
                  ? `color-mix(in srgb, ${borderColorMix.color} calc(${borderColorMix.alpha} * 100%), transparent)`
                  : "",
                color: textColorMix
                  ? `color-mix(in srgb, ${textColorMix.color} calc(${textColorMix.alpha} * 100%), transparent)`
                  : "",
                backgroundColor: backgroundColorMix
                  ? `color-mix(in srgb, ${backgroundColorMix.color} calc(${backgroundColorMix.alpha} * 100%), transparent)`
                  : "",
              },
            })
          )}
        </Mask>
      </Grid>
    );
  }
);
export { RadialMask };
