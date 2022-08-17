import React from "react";
import { RichText } from "../../../base-components/rich-text/RichText";
import {
  IGenCompHeroSliderSlide,
  IGenAsset,
  // IGenVideo,
} from "../../../utils/types_gen";
import { SCompHeroSliderSlide } from "./styles/SCompHeroSliderSlide";
import { SCompHeroSliderSlideHeadline } from "./styles/SCompHeroSliderSlideHeadline";
import { SCompHeroSliderSlideText } from "./styles/SCompHeroSliderSlideText";
import { SCompHeroSliderSlideTextContainer } from "./styles/SCompHeroSliderSlideTextContainer";
import Image from "next/image";
import { SCompHeroSliderSlideImage } from "./styles/SCompHeroSliderSlideImage";
import { SCompHeroSliderSlideBackdrop } from "../styles/SCompHeroSliderSlideBackdrop";
// import { Video } from "../../video/Video";

export const CompHeroSliderSlide: React.FC<
  IGenCompHeroSliderSlide & {
    active: boolean;
    transitionFrom?: boolean;
  }
> = ({ headline, text, backgroundImage, active, transitionFrom, ...props }) => {
  const _image = backgroundImage.find(
    (image) => image?.__typename === "Asset"
  ) as IGenAsset;

  // const _video = backgroundImage.find(
  //   (image) => image?.__typename === "Video"
  // ) as IGenVideo;

  return (
    <SCompHeroSliderSlide active={active} transitionFrom={transitionFrom}>
      <SCompHeroSliderSlideBackdrop> </SCompHeroSliderSlideBackdrop>
      <SCompHeroSliderSlideImage
        dominantColor={_image?.dominantColor ?? "#FFF"}
      >
        {/* {_video ? (
          <Video id={_video.id} vimeoVideoId={_video.vimeoVideoId}></Video>
        ) : ( */}
        <>
          {_image?.src ? (
            <Image
              layout="responsive"
              src={_image?.src}
              width={typeof window != "undefined" ? window.innerWidth : 1920}
              height={typeof window != "undefined" ? window.innerHeight : 1080}
              alt={_image?.description}
            />
          ) : null}
        </>
        {/* )} */}
      </SCompHeroSliderSlideImage>
      <SCompHeroSliderSlideTextContainer>
        <SCompHeroSliderSlideHeadline>{headline}</SCompHeroSliderSlideHeadline>
        <SCompHeroSliderSlideText>
          {text?.content && <RichText content={text.content}></RichText>}
        </SCompHeroSliderSlideText>
        {props.children}
      </SCompHeroSliderSlideTextContainer>
    </SCompHeroSliderSlide>
  );
};
