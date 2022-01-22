import React, { FC } from "react";
import styled from "styled-components";
import {
  bold2XLCss,
  regularNormal2XLCss,
  regularTighter2XLCss,
  regularTight2XLCss,
  regularWide2XLCss,
  regularWider2XLCss,
  regularWidest2XLCss,
} from "@nightfall-ui/typography";
import { Hr, Li, Ul } from "../../components";
import { FadeInZoomInTransition } from "../../components/transitions";

const TightRegular = styled.div`
  ${regularTight2XLCss};
`;

const TighterRegular = styled.div`
  ${regularTighter2XLCss};
`;

const WideRegular = styled.div`
  ${regularWide2XLCss};
`;

const WidestRegular = styled.div`
  ${regularWidest2XLCss};
`;

const NormalRegular = styled.div`
  ${regularNormal2XLCss};
`;

const WiderRegular = styled.div`
  ${regularWider2XLCss};
`;

const Depreciate = styled.span`
  color: #828282;
`;

const ExampleParagraph = styled.p`
  ${regularNormal2XLCss};
`;

const H4 = styled.h4`
  ${bold2XLCss};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const RegularSubtypes: FC<{ animate: boolean }> = ({ animate }) => {
  return (
    <div>
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
                <h5>
                  Tighter <Depreciate>Regular 2XL</Depreciate>
                </h5>
                <TighterRegular>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </TighterRegular>
                <Hr />
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 50 : 250}>
              <div>
                <h5>
                  Tight <Depreciate>Regular 2XL</Depreciate>
                </h5>
                <TightRegular>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </TightRegular>
                <Hr />
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 100 : 200}>
              <div>
                <h5>
                  Normal <Depreciate>Regular 2XL</Depreciate>
                </h5>
                <NormalRegular>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </NormalRegular>
                <Hr />
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 150 : 150}>
              <div>
                <h5>
                  Wide <Depreciate>Regular 2XL</Depreciate>
                </h5>
                <WideRegular>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </WideRegular>
                <Hr />
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 200 : 100}>
              <div>
                <h5>
                  Wider <Depreciate>Regular 2XL</Depreciate>
                </h5>
                <WiderRegular>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </WiderRegular>
                <Hr />
              </div>
            </FadeInZoomInTransition>
          </Li>

          <Li>
            <FadeInZoomInTransition in={animate} delay={animate ? 250 : 50}>
              <div>
                <h5>
                  Widest <Depreciate>Regular 2XL</Depreciate>
                </h5>
                <WidestRegular>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </WidestRegular>
                <Hr />
              </div>
            </FadeInZoomInTransition>
          </Li>
        </Ul>
      </div>
    </div>
  );
};

export { RegularSubtypes };
