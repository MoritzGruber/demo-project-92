import React from "react";
import { SText } from "./styles/SText";
import { RichText } from "../../base-components/rich-text/RichText";

interface IText {
  content: any;
}

export const Text: React.FC<IText> = ({ ...props }) => {
  if (!props.content) {
    return null;
  }

  return (
    <SText>
      <RichText content={props.content} />
    </SText>
  );
};
