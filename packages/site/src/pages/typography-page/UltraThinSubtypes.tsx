import React, { FC } from "react";
import styled from "styled-components";
import {
  normalUltraThin2XLCss,
  tighterUltraThin2XLCss,
  tightUltraThin2XLCss,
  wideUltraThin2XLCss,
  widerUltraThin2XLCss,
  widestUltraThin2XLCss,
  bold2XLCss,
  regularNormalCss,
} from "@nightfall-ui/typography";
import { Hr, Li, Ul } from "../../components";
import { FadeInZoomInTransition } from "../../components/transitions";

const TightUltraThin = styled.div`
  ${tightUltraThin2XLCss};
`;

const TighterUltraThin = styled.div`
  ${tighterUltraThin2XLCss};
`;

const WideUltraThin = styled.div`
  ${wideUltraThin2XLCss};
`;

const WidestUltraThin = styled.div`
  ${widestUltraThin2XLCss};
`;

const NormalUltraThin = styled.div`
  ${normalUltraThin2XLCss};
`;

const WiderUltraThin = styled.div`
  ${widerUltraThin2XLCss};
`;

const ExampleParagraph = styled.p`
  ${normalUltraThin2XLCss};
`;

const H4 = styled.h4`
  ${bold2XLCss};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const N = styled.p`
  ${regularNormalCss}
`;

const UltraThinSubtypes: FC<{ animate: boolean }> = ({ animate }) => {
  return (
    <div>
      <div>
        <H4>Css Name</H4>
        <N>
          [tighter, tight, normal, wide, wider, widest] ultraThin [XS, SM, XL,
          2XL, ..., 8XL]
        </N>
        <ul>
          <li>tighterUltraThinXS</li>
          <li>tighterUltraThinSM</li>
          <li>tighterUltraThinXL</li>
          <li>...</li>
        </ul>
      </div>
      <div>
        <H4>Example</H4>
        <ExampleParagraph>
          Such a riot of sea and wind strews the whole extent of beach with
          whatever has been lost or thrown overboard, or torn out of sunken
          ships. Many a man has made a good week’s work in a single day by what
          he has found while walking along the Beach when the surf was down.
        </ExampleParagraph>
      </div>
      <div>
        <H4>Spacing</H4>
        <Ul>
          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 0 : 300}>
              <div>
                <h5>Tighter Ultra Thin 2XL</h5>
                <TighterUltraThin>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </TighterUltraThin>
                <Hr />
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 50 : 250}>
              <div>
                <h5>Tight Ultra Thin 2XL</h5>
                <TightUltraThin>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </TightUltraThin>
                <Hr />
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 100 : 200}>
              <div>
                <h5>Normal Ultra Thin 2XL</h5>
                <NormalUltraThin>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </NormalUltraThin>
                <Hr />
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 150 : 150}>
              <div>
                <h5>Wide Ultra Thin 2XL</h5>
                <WideUltraThin>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </WideUltraThin>
                <Hr></Hr>
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 200 : 100}>
              <div>
                <h5>Wider Ultra Thin 2XL</h5>
                <WiderUltraThin>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </WiderUltraThin>
                <Hr></Hr>
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 250 : 50}>
              <div>
                <h5>Widest Ultra Thin 2XL</h5>
                <WidestUltraThin>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </WidestUltraThin>
                <Hr></Hr>
              </div>
            </FadeInZoomInTransition>
          </Li>
        </Ul>
      </div>
    </div>
  );
};

export { UltraThinSubtypes };
