import React from "react";
import { GridPadding } from "../../base-components/grid-padding/GridPadding";
import { Img } from "../../base-components/img/Img";
import {
  IGenAsset,
  IGenCompInfographic,
  IGenCompInfographicTextBubble,
} from "../../utils/types_gen";
import { SCompInfographic } from "./styles/SCompInfographic";
import { SCompInfographicBubble1 } from "./styles/SCompInfographicBubble1";
import { SCompInfographicBubble2 } from "./styles/SCompInfographicBubble2";
import { SCompInfographicBubble3 } from "./styles/SCompInfographicBubble3";
import { SCompInfographicBubbleInner } from "./styles/SCompInfographicBubbleInner";
import { SCompInfographicGrid } from "./styles/SCompInfographicGrid";
import { SCompInfographicImage1 } from "./styles/SCompInfographicImage1";
import { SCompInfographicImage2 } from "./styles/SCompInfographicImage2";
import { SCompInfographicImage3 } from "./styles/SCompInfographicImage3";
import { SCompInfographicImage4 } from "./styles/SCompInfographicImage4";
import { SCompInfographicImage5 } from "./styles/SCompInfographicImage5";
import { SCompInfographicImageInner } from "./styles/SCompInfographicImageInner";

export const CompInfographic: React.FC<IGenCompInfographic> = ({
  ...props
}) => {
  const bubbles = props.bubbles as IGenCompInfographicTextBubble[];
  const images = props.images as IGenAsset[];

  return (
    <GridPadding>
      <SCompInfographic>
        <SCompInfographicGrid>
          <SCompInfographicBubble1>
            {bubbles?.[0] && (
              <SCompInfographicBubbleInner>
                <div />
                <div>
                  <h2>{bubbles?.[0].headline}</h2>
                  <h3>{bubbles?.[0].subheadline}</h3>
                </div>
              </SCompInfographicBubbleInner>
            )}
          </SCompInfographicBubble1>
          <SCompInfographicBubble2>
            {bubbles?.[1] && (
              <SCompInfographicBubbleInner>
                <div />
                <div>
                  <h2>{bubbles?.[1].headline}</h2>
                  <h3>{bubbles?.[1].subheadline}</h3>
                </div>
              </SCompInfographicBubbleInner>
            )}
          </SCompInfographicBubble2>
          <SCompInfographicBubble3>
            {bubbles?.[2] && (
              <SCompInfographicBubbleInner>
                <div />
                <div>
                  <h2>{bubbles?.[2].headline}</h2>
                  <h3>{bubbles?.[2].subheadline}</h3>
                </div>
              </SCompInfographicBubbleInner>
            )}
          </SCompInfographicBubble3>
          <SCompInfographicImage1>
            {images?.[0]?.src && (
              <SCompInfographicImageInner>
                <div />
                <div>
                  <Img
                    src={images?.[0]?.src}
                    resolution={{ width: 400, height: 0 }}
                  ></Img>
                </div>
              </SCompInfographicImageInner>
            )}
          </SCompInfographicImage1>
          <SCompInfographicImage2>
            {images?.[1]?.src && (
              <SCompInfographicImageInner>
                <div />
                <div>
                  <Img
                    src={images?.[1]?.src}
                    resolution={{ width: 400, height: 0 }}
                  ></Img>
                </div>
              </SCompInfographicImageInner>
            )}
          </SCompInfographicImage2>

          {bubbles?.[2] && (
            <>
              <SCompInfographicImage3>
                {images?.[2]?.src && (
                  <SCompInfographicImageInner>
                    <div />
                    <div>
                      <Img
                        src={images?.[2]?.src}
                        resolution={{ width: 400, height: 0 }}
                      ></Img>
                    </div>
                  </SCompInfographicImageInner>
                )}
              </SCompInfographicImage3>
              <SCompInfographicImage4>
                {images?.[3]?.src && (
                  <SCompInfographicImageInner>
                    <div />
                    <div>
                      <Img
                        src={images?.[3]?.src}
                        resolution={{ width: 400, height: 0 }}
                      ></Img>
                    </div>
                  </SCompInfographicImageInner>
                )}
              </SCompInfographicImage4>
              <SCompInfographicImage5>
                {images?.[4]?.src && (
                  <SCompInfographicImageInner>
                    <div />
                    <div>
                      <Img
                        src={images?.[4]?.src}
                        resolution={{ width: 400, height: 0 }}
                      ></Img>
                    </div>
                  </SCompInfographicImageInner>
                )}
              </SCompInfographicImage5>
            </>
          )}
        </SCompInfographicGrid>
        {props.children}
      </SCompInfographic>
    </GridPadding>
  );
};
