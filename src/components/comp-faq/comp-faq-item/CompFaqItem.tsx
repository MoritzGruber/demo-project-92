import React, { useRef } from "react";
import { Dash } from "../../../svgs/Dash";
import { Plus } from "../../../svgs/Plus";
import { IGenFaqItem } from "../../../utils/types_gen";
import { Text } from "../../text/Text";
import { SCompFaqItem } from "./styles/SCompFaqItem";
import { SCompFaqItemTitle } from "./styles/SCompFaqItemTitle";
import { SCompFaqItemContent } from "./styles/SCompFaqItemContent";

export interface ICompFaqItem {
  item: IGenFaqItem;
  handleActiveFaq: (id: string) => () => void;
  activeId: string;
}

export const CompFaqItem: React.FC<ICompFaqItem> = ({
  item,
  handleActiveFaq,
  activeId,
}) => {
  const contentRef = useRef<HTMLDivElement>();
  return (
    <SCompFaqItem>
      <SCompFaqItemTitle onClick={handleActiveFaq(item?.id)}>
        <p>{item?.title ?? ""}</p>
        {item?.id === activeId ? <Dash /> : <Plus />}
      </SCompFaqItemTitle>
      <SCompFaqItemContent
        ref={contentRef}
        isActive={activeId === item?.id}
        contentHeight={contentRef?.current?.scrollHeight}
      >
        <Text content={item?.description?.content} />
      </SCompFaqItemContent>
    </SCompFaqItem>
  );
};
