export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  JSONObject: any;
};

export type IGenAsset = {
  __typename?: "Asset";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  keywords?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  originType?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  copyright?: Maybe<Scalars["String"]>;
  dominantColor?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenAsset_Connection = {
  __typename?: "Asset_Connection";
  edges?: Maybe<Array<Maybe<IGenAsset_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenAsset_ConnectionEdge = {
  __typename?: "Asset_ConnectionEdge";
  node?: Maybe<IGenAsset>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenAsset_CreateInput = {
  title?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  author?: InputMaybe<Scalars["String"]>;
  copyright?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
};

export type IGenAsset_Sort = {
  title?: InputMaybe<Order>;
  description?: InputMaybe<Order>;
  keywords?: InputMaybe<Order>;
  originalName?: InputMaybe<Order>;
  originType?: InputMaybe<Order>;
  author?: InputMaybe<Order>;
  copyright?: InputMaybe<Order>;
  dominantColor?: InputMaybe<Order>;
};

export type IGenAsset_UpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  author?: InputMaybe<Scalars["String"]>;
  copyright?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
};

export type IGenAsset_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
};

export type IGenCaisy_Field_Document_NotFound = {
  __typename?: "Caisy_Field_Document_NotFound";
  id?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type IGenCaisyDocument_Meta = {
  __typename?: "CaisyDocument_Meta";
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
};

export type IGenCaisyField_Color_Where = {
  neq?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  contains?: InputMaybe<Scalars["String"]>;
};

export type IGenCaisyField_Richtext_Where = {
  neq?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  contains?: InputMaybe<Scalars["String"]>;
};

export type IGenCaisyField_String_Where = {
  neq?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  contains?: InputMaybe<Scalars["String"]>;
};

export type IGenCompBrandCategory = {
  __typename?: "CompBrandCategory";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompBrandCategory_Connection = {
  __typename?: "CompBrandCategory_Connection";
  edges?: Maybe<Array<Maybe<IGenCompBrandCategory_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompBrandCategory_ConnectionEdge = {
  __typename?: "CompBrandCategory_ConnectionEdge";
  node?: Maybe<IGenCompBrandCategory>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompBrandCategory_CreateInput = {
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompBrandCategory_Sort = {
  title?: InputMaybe<Order>;
};

export type IGenCompBrandCategory_UpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenCompBrandCategory_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Where>>>;
};

export type IGenCompButton = {
  __typename?: "CompButton";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  link?: Maybe<Array<Maybe<IGenCompButton_Link>>>;
  style?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompButtonLinkArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompButton_Connection = {
  __typename?: "CompButton_Connection";
  edges?: Maybe<Array<Maybe<IGenCompButton_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompButton_ConnectionEdge = {
  __typename?: "CompButton_ConnectionEdge";
  node?: Maybe<IGenCompButton>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompButton_CreateInput = {
  title?: InputMaybe<Scalars["String"]>;
  link?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  style?: InputMaybe<CompButton_Style>;
};

export type IGenCompButton_Link = IGenPage | IGenCaisy_Field_Document_NotFound;

export type IGenCompButton_Sort = {
  title?: InputMaybe<Order>;
  link?: InputMaybe<Order>;
  style?: InputMaybe<Order>;
};

export enum CompButton_Style {
  WithBackground = "WithBackground",
  WithoutBackground = "WithoutBackground",
  Inverted = "Inverted",
}

export type IGenCompButton_Style_Where = {
  eq?: InputMaybe<CompButton_Style>;
};

export type IGenCompButton_UpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  link?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  style?: InputMaybe<CompButton_Style>;
};

export type IGenCompButton_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  style?: InputMaybe<IGenCompButton_Style_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompButton_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompButton_Where>>>;
};

export type IGenCompButtonExternalLinks = {
  __typename?: "CompButtonExternalLinks";
  id?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  style?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompButtonExternalLinks_Connection = {
  __typename?: "CompButtonExternalLinks_Connection";
  edges?: Maybe<Array<Maybe<IGenCompButtonExternalLinks_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompButtonExternalLinks_ConnectionEdge = {
  __typename?: "CompButtonExternalLinks_ConnectionEdge";
  node?: Maybe<IGenCompButtonExternalLinks>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompButtonExternalLinks_CreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  style?: InputMaybe<CompButtonExternalLinks_Style>;
};

export type IGenCompButtonExternalLinks_Sort = {
  description?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
  url?: InputMaybe<Order>;
  style?: InputMaybe<Order>;
};

export enum CompButtonExternalLinks_Style {
  WithBackground = "WithBackground",
  WithoutBackground = "WithoutBackground",
  Inverted = "Inverted",
}

export type IGenCompButtonExternalLinks_Style_Where = {
  eq?: InputMaybe<CompButtonExternalLinks_Style>;
};

export type IGenCompButtonExternalLinks_UpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  style?: InputMaybe<CompButtonExternalLinks_Style>;
};

export type IGenCompButtonExternalLinks_Where = {
  description?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  url?: InputMaybe<IGenCaisyField_String_Where>;
  style?: InputMaybe<IGenCompButtonExternalLinks_Style_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Where>>>;
};

export type IGenCompFacts = {
  __typename?: "CompFacts";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  facts?: Maybe<Array<Maybe<IGenCompFacts_Facts>>>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompFactsFactsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFacts_Connection = {
  __typename?: "CompFacts_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFacts_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFacts_ConnectionEdge = {
  __typename?: "CompFacts_ConnectionEdge";
  node?: Maybe<IGenCompFacts>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompFacts_Facts =
  | IGenCompFactsFact
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompFacts_Sort = {
  title?: InputMaybe<Order>;
  facts?: InputMaybe<Order>;
};

export type IGenCompFacts_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
};

export type IGenCompFactsFact = {
  __typename?: "CompFactsFact";
  id?: Maybe<Scalars["ID"]>;
  label?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompFactsFact_Connection = {
  __typename?: "CompFactsFact_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFactsFact_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFactsFact_ConnectionEdge = {
  __typename?: "CompFactsFact_ConnectionEdge";
  node?: Maybe<IGenCompFactsFact>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompFactsFact_Sort = {
  label?: InputMaybe<Order>;
  value?: InputMaybe<Order>;
};

export type IGenCompFactsFact_Where = {
  label?: InputMaybe<IGenCaisyField_String_Where>;
  value?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Where>>>;
};

export type IGenCompFaq = {
  __typename?: "CompFaq";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  faqItems?: Maybe<Array<Maybe<IGenCompFaq_FaqItems>>>;
  appearance?: Maybe<Scalars["JSON"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompFaqFaqItemsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFaq_Connection = {
  __typename?: "CompFaq_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFaq_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFaq_ConnectionEdge = {
  __typename?: "CompFaq_ConnectionEdge";
  node?: Maybe<IGenCompFaq>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompFaq_FaqItems =
  | IGenCompFaqItem
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompFaq_Sort = {
  title?: InputMaybe<Order>;
  faqItems?: InputMaybe<Order>;
};

export type IGenCompFaq_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
};

export type IGenCompFaqItem = {
  __typename?: "CompFaqItem";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["JSONObject"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompFaqItem_Connection = {
  __typename?: "CompFaqItem_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFaqItem_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFaqItem_ConnectionEdge = {
  __typename?: "CompFaqItem_ConnectionEdge";
  node?: Maybe<IGenCompFaqItem>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompFaqItem_CreateInput = {
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["JSONObject"]>;
};

export type IGenCompFaqItem_Sort = {
  title?: InputMaybe<Order>;
};

export type IGenCompFaqItem_UpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["JSONObject"]>;
};

export type IGenCompFaqItem_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_Richtext_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Where>>>;
};

export type IGenCompFooterSection = {
  __typename?: "CompFooterSection";
  id?: Maybe<Scalars["ID"]>;
  sectionTitle?: Maybe<Scalars["String"]>;
  links?: Maybe<Array<Maybe<IGenCompFooterSection_Links>>>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompFooterSectionLinksArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFooterSection_Connection = {
  __typename?: "CompFooterSection_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFooterSection_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFooterSection_ConnectionEdge = {
  __typename?: "CompFooterSection_ConnectionEdge";
  node?: Maybe<IGenCompFooterSection>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompFooterSection_CreateInput = {
  sectionTitle?: InputMaybe<Scalars["String"]>;
  links?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type IGenCompFooterSection_Links =
  | IGenCompButtonExternalLinks
  | IGenCompButton
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompFooterSection_Sort = {
  sectionTitle?: InputMaybe<Order>;
  links?: InputMaybe<Order>;
};

export type IGenCompFooterSection_UpdateInput = {
  sectionTitle?: InputMaybe<Scalars["String"]>;
  links?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type IGenCompFooterSection_Where = {
  sectionTitle?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Where>>>;
};

export type IGenCompGrid = {
  __typename?: "CompGrid";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  numberOfColumns?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<IGenCompGrid_Items>>>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompGridItemsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGrid_Connection = {
  __typename?: "CompGrid_Connection";
  edges?: Maybe<Array<Maybe<IGenCompGrid_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompGrid_ConnectionEdge = {
  __typename?: "CompGrid_ConnectionEdge";
  node?: Maybe<IGenCompGrid>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompGrid_Items =
  | IGenCompGridBrandCard
  | IGenCompGridTeamMemberCard
  | IGenCaisy_Field_Document_NotFound;

export enum CompGrid_NumberOfColumns {
  Use2ColumnsToCenter = "Use2ColumnsToCenter",
  Use3Columns = "Use3Columns",
  Use4Columns = "Use4Columns",
}

export type IGenCompGrid_NumberOfColumns_Where = {
  eq?: InputMaybe<CompGrid_NumberOfColumns>;
};

export type IGenCompGrid_Sort = {
  title?: InputMaybe<Order>;
  headline?: InputMaybe<Order>;
  numberOfColumns?: InputMaybe<Order>;
  items?: InputMaybe<Order>;
};

export type IGenCompGrid_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  numberOfColumns?: InputMaybe<IGenCompGrid_NumberOfColumns_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
};

export type IGenCompGridBrandCard = {
  __typename?: "CompGridBrandCard";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  logo?: Maybe<IGenAsset>;
  linksTo?: Maybe<Scalars["String"]>;
  category?: Maybe<Array<Maybe<IGenCompGridBrandCard_Category>>>;
  style?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompGridBrandCardLogoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridBrandCardCategoryArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridBrandCard_Category =
  | IGenCompBrandCategory
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompGridBrandCard_Connection = {
  __typename?: "CompGridBrandCard_Connection";
  edges?: Maybe<Array<Maybe<IGenCompGridBrandCard_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompGridBrandCard_ConnectionEdge = {
  __typename?: "CompGridBrandCard_ConnectionEdge";
  node?: Maybe<IGenCompGridBrandCard>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompGridBrandCard_Sort = {
  name?: InputMaybe<Order>;
  description?: InputMaybe<Order>;
  logo?: InputMaybe<Order>;
  linksTo?: InputMaybe<Order>;
  category?: InputMaybe<Order>;
  style?: InputMaybe<Order>;
};

export enum CompGridBrandCard_Style {
  JustLogo = "justLogo",
  WithDescription = "withDescription",
}

export type IGenCompGridBrandCard_Style_Where = {
  eq?: InputMaybe<CompGridBrandCard_Style>;
};

export type IGenCompGridBrandCard_Where = {
  name?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  linksTo?: InputMaybe<IGenCaisyField_String_Where>;
  style?: InputMaybe<IGenCompGridBrandCard_Style_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
};

export type IGenCompGridTeamMemberCard = {
  __typename?: "CompGridTeamMemberCard";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  linkToLinkedInProfile?: Maybe<Scalars["String"]>;
  image?: Maybe<IGenAsset>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompGridTeamMemberCardImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridTeamMemberCard_Connection = {
  __typename?: "CompGridTeamMemberCard_Connection";
  edges?: Maybe<Array<Maybe<IGenCompGridTeamMemberCard_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompGridTeamMemberCard_ConnectionEdge = {
  __typename?: "CompGridTeamMemberCard_ConnectionEdge";
  node?: Maybe<IGenCompGridTeamMemberCard>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompGridTeamMemberCard_Sort = {
  name?: InputMaybe<Order>;
  jobTitle?: InputMaybe<Order>;
  linkToLinkedInProfile?: InputMaybe<Order>;
  image?: InputMaybe<Order>;
};

export type IGenCompGridTeamMemberCard_Where = {
  name?: InputMaybe<IGenCaisyField_String_Where>;
  jobTitle?: InputMaybe<IGenCaisyField_String_Where>;
  linkToLinkedInProfile?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
};

export type IGenCompHeroSlider = {
  __typename?: "CompHeroSlider";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  slides?: Maybe<Array<Maybe<IGenCompHeroSlider_Slides>>>;
  style?: Maybe<Scalars["JSON"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompHeroSliderSlidesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSlider_Connection = {
  __typename?: "CompHeroSlider_Connection";
  edges?: Maybe<Array<Maybe<IGenCompHeroSlider_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompHeroSlider_ConnectionEdge = {
  __typename?: "CompHeroSlider_ConnectionEdge";
  node?: Maybe<IGenCompHeroSlider>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompHeroSlider_Slides =
  | IGenCompHeroSliderSlide
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompHeroSlider_Sort = {
  title?: InputMaybe<Order>;
  slides?: InputMaybe<Order>;
};

export type IGenCompHeroSlider_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
};

export type IGenCompHeroSliderSlide = {
  __typename?: "CompHeroSliderSlide";
  id?: Maybe<Scalars["ID"]>;
  headline?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["JSONObject"]>;
  backgroundImage?: Maybe<
    Array<Maybe<IGenCompHeroSliderSlide_BackgroundImage>>
  >;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompHeroSliderSlideBackgroundImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlide_BackgroundImage =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompHeroSliderSlide_Connection = {
  __typename?: "CompHeroSliderSlide_Connection";
  edges?: Maybe<Array<Maybe<IGenCompHeroSliderSlide_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompHeroSliderSlide_ConnectionEdge = {
  __typename?: "CompHeroSliderSlide_ConnectionEdge";
  node?: Maybe<IGenCompHeroSliderSlide>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlide_Sort = {
  headline?: InputMaybe<Order>;
  backgroundImage?: InputMaybe<Order>;
};

export type IGenCompHeroSliderSlide_Where = {
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
};

export type IGenCompImageCard = {
  __typename?: "CompImageCard";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<IGenAsset>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompImageCardImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageCard_Connection = {
  __typename?: "CompImageCard_Connection";
  edges?: Maybe<Array<Maybe<IGenCompImageCard_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompImageCard_ConnectionEdge = {
  __typename?: "CompImageCard_ConnectionEdge";
  node?: Maybe<IGenCompImageCard>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompImageCard_CreateInput = {
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["ID"]>;
};

export type IGenCompImageCard_Sort = {
  title?: InputMaybe<Order>;
  description?: InputMaybe<Order>;
  image?: InputMaybe<Order>;
};

export type IGenCompImageCard_UpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["ID"]>;
};

export type IGenCompImageCard_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompImageCard_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompImageCard_Where>>>;
};

export type IGenCompImageWithText = {
  __typename?: "CompImageWithText";
  id?: Maybe<Scalars["ID"]>;
  strap?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["JSONObject"]>;
  buttons?: Maybe<Array<Maybe<IGenCompImageWithText_Buttons>>>;
  asset?: Maybe<Array<Maybe<IGenCompImageWithText_Asset>>>;
  imageRightInsteadOfLeft?: Maybe<Scalars["Boolean"]>;
  imageLeftTextRight?: Maybe<Scalars["JSON"]>;
  imageRightTextLeft?: Maybe<Scalars["JSON"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompImageWithTextButtonsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithTextAssetArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithText_Asset =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompImageWithText_Buttons =
  | IGenCompButtonExternalLinks
  | IGenCompButton
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompImageWithText_Connection = {
  __typename?: "CompImageWithText_Connection";
  edges?: Maybe<Array<Maybe<IGenCompImageWithText_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompImageWithText_ConnectionEdge = {
  __typename?: "CompImageWithText_ConnectionEdge";
  node?: Maybe<IGenCompImageWithText>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompImageWithText_Sort = {
  strap?: InputMaybe<Order>;
  headline?: InputMaybe<Order>;
  buttons?: InputMaybe<Order>;
  asset?: InputMaybe<Order>;
  imageRightInsteadOfLeft?: InputMaybe<Order>;
};

export type IGenCompImageWithText_Where = {
  strap?: InputMaybe<IGenCaisyField_String_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  imageRightInsteadOfLeft?: InputMaybe<Scalars["Boolean"]>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
};

export type IGenCompInfographic = {
  __typename?: "CompInfographic";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  bubbles?: Maybe<Array<Maybe<IGenCompInfographic_Bubbles>>>;
  images?: Maybe<Array<Maybe<IGenCompInfographic_Images>>>;
  style?: Maybe<Scalars["JSON"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompInfographicBubblesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompInfographicImagesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompInfographic_Bubbles =
  | IGenCompInfographicTextBubble
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompInfographic_Connection = {
  __typename?: "CompInfographic_Connection";
  edges?: Maybe<Array<Maybe<IGenCompInfographic_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompInfographic_ConnectionEdge = {
  __typename?: "CompInfographic_ConnectionEdge";
  node?: Maybe<IGenCompInfographic>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompInfographic_Images =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompInfographic_Sort = {
  title?: InputMaybe<Order>;
  bubbles?: InputMaybe<Order>;
  images?: InputMaybe<Order>;
};

export type IGenCompInfographic_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompInfographic_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompInfographic_Where>>>;
};

export type IGenCompInfographicTextBubble = {
  __typename?: "CompInfographicTextBubble";
  id?: Maybe<Scalars["ID"]>;
  headline?: Maybe<Scalars["String"]>;
  subheadline?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompInfographicTextBubble_Connection = {
  __typename?: "CompInfographicTextBubble_Connection";
  edges?: Maybe<Array<Maybe<IGenCompInfographicTextBubble_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompInfographicTextBubble_ConnectionEdge = {
  __typename?: "CompInfographicTextBubble_ConnectionEdge";
  node?: Maybe<IGenCompInfographicTextBubble>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompInfographicTextBubble_Sort = {
  headline?: InputMaybe<Order>;
  subheadline?: InputMaybe<Order>;
};

export type IGenCompInfographicTextBubble_Where = {
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompInfographicTextBubble_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompInfographicTextBubble_Where>>>;
};

export type IGenCompPageHeader = {
  __typename?: "CompPageHeader";
  id?: Maybe<Scalars["ID"]>;
  headline?: Maybe<Scalars["String"]>;
  backgroundImage?: Maybe<Array<Maybe<IGenCompPageHeader_BackgroundImage>>>;
  style?: Maybe<Scalars["JSON"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompPageHeaderBackgroundImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompPageHeader_BackgroundImage =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompPageHeader_Connection = {
  __typename?: "CompPageHeader_Connection";
  edges?: Maybe<Array<Maybe<IGenCompPageHeader_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompPageHeader_ConnectionEdge = {
  __typename?: "CompPageHeader_ConnectionEdge";
  node?: Maybe<IGenCompPageHeader>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompPageHeader_Sort = {
  headline?: InputMaybe<Order>;
  backgroundImage?: InputMaybe<Order>;
};

export type IGenCompPageHeader_Where = {
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
};

export type IGenCompSectionHeader = {
  __typename?: "CompSectionHeader";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  image?: Maybe<Array<Maybe<IGenCompSectionHeader_Image>>>;
  style?: Maybe<Scalars["JSON"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompSectionHeaderImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompSectionHeader_Connection = {
  __typename?: "CompSectionHeader_Connection";
  edges?: Maybe<Array<Maybe<IGenCompSectionHeader_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompSectionHeader_ConnectionEdge = {
  __typename?: "CompSectionHeader_ConnectionEdge";
  node?: Maybe<IGenCompSectionHeader>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompSectionHeader_Image =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompSectionHeader_Sort = {
  title?: InputMaybe<Order>;
  image?: InputMaybe<Order>;
};

export type IGenCompSectionHeader_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
};

export type IGenCompTextBlock = {
  __typename?: "CompTextBlock";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["JSONObject"]>;
  buttons?: Maybe<Array<Maybe<IGenCompTextBlock_Buttons>>>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenCompTextBlockButtonsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompTextBlock_Buttons =
  | IGenCompButtonExternalLinks
  | IGenCompButton
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompTextBlock_Connection = {
  __typename?: "CompTextBlock_Connection";
  edges?: Maybe<Array<Maybe<IGenCompTextBlock_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompTextBlock_ConnectionEdge = {
  __typename?: "CompTextBlock_ConnectionEdge";
  node?: Maybe<IGenCompTextBlock>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenCompTextBlock_Sort = {
  title?: InputMaybe<Order>;
  buttons?: InputMaybe<Order>;
};

export type IGenCompTextBlock_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
};

export type IGenFooter = {
  __typename?: "Footer";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  legalSection?: Maybe<Array<Maybe<IGenFooter_LegalSection>>>;
  sections?: Maybe<Array<Maybe<IGenFooter_Sections>>>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenFooterLegalSectionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenFooterSectionsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenFooter_LegalSection =
  | IGenCompButtonExternalLinks
  | IGenCompButton
  | IGenCaisy_Field_Document_NotFound;

export type IGenFooter_Sections =
  | IGenCompFooterSection
  | IGenCaisy_Field_Document_NotFound;

export type IGenMegaMenu = {
  __typename?: "MegaMenu";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  home?: Maybe<Array<Maybe<IGenMegaMenu_Home>>>;
  mainNavigation?: Maybe<Array<Maybe<IGenMegaMenu_MainNavigation>>>;
  logo?: Maybe<IGenAsset>;
  logoDarkVersion?: Maybe<IGenAsset>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenMegaMenuHomeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMegaMenuMainNavigationArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMegaMenuLogoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMegaMenuLogoDarkVersionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMegaMenu_Home = IGenPage | IGenCaisy_Field_Document_NotFound;

export type IGenMegaMenu_MainNavigation =
  | IGenPage
  | IGenCaisy_Field_Document_NotFound;

export type IGenMutation = {
  __typename?: "Mutation";
  createCompBrandCategory?: Maybe<IGenCompBrandCategory>;
  updateCompBrandCategory?: Maybe<IGenCompBrandCategory>;
  deleteCompBrandCategory?: Maybe<Scalars["Boolean"]>;
  createCompFaqItem?: Maybe<IGenCompFaqItem>;
  updateCompFaqItem?: Maybe<IGenCompFaqItem>;
  deleteCompFaqItem?: Maybe<Scalars["Boolean"]>;
  createCompFooterSection?: Maybe<IGenCompFooterSection>;
  updateCompFooterSection?: Maybe<IGenCompFooterSection>;
  deleteCompFooterSection?: Maybe<Scalars["Boolean"]>;
  createCompButton?: Maybe<IGenCompButton>;
  updateCompButton?: Maybe<IGenCompButton>;
  deleteCompButton?: Maybe<Scalars["Boolean"]>;
  createCompImageCard?: Maybe<IGenCompImageCard>;
  updateCompImageCard?: Maybe<IGenCompImageCard>;
  deleteCompImageCard?: Maybe<Scalars["Boolean"]>;
  createCompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks>;
  updateCompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks>;
  deleteCompButtonExternalLinks?: Maybe<Scalars["Boolean"]>;
  createAsset?: Maybe<IGenAsset>;
  updateAsset?: Maybe<IGenAsset>;
  deleteAsset?: Maybe<Scalars["Boolean"]>;
};

export type IGenMutationCreateCompBrandCategoryArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompBrandCategory_CreateInput;
};

export type IGenMutationUpdateCompBrandCategoryArgs = {
  id: Scalars["ID"];
  merge?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompBrandCategory_UpdateInput;
};

export type IGenMutationDeleteCompBrandCategoryArgs = {
  id: Scalars["ID"];
};

export type IGenMutationCreateCompFaqItemArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompFaqItem_CreateInput;
};

export type IGenMutationUpdateCompFaqItemArgs = {
  id: Scalars["ID"];
  merge?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompFaqItem_UpdateInput;
};

export type IGenMutationDeleteCompFaqItemArgs = {
  id: Scalars["ID"];
};

export type IGenMutationCreateCompFooterSectionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompFooterSection_CreateInput;
};

export type IGenMutationUpdateCompFooterSectionArgs = {
  id: Scalars["ID"];
  merge?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompFooterSection_UpdateInput;
};

export type IGenMutationDeleteCompFooterSectionArgs = {
  id: Scalars["ID"];
};

export type IGenMutationCreateCompButtonArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompButton_CreateInput;
};

export type IGenMutationUpdateCompButtonArgs = {
  id: Scalars["ID"];
  merge?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompButton_UpdateInput;
};

export type IGenMutationDeleteCompButtonArgs = {
  id: Scalars["ID"];
};

export type IGenMutationCreateCompImageCardArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompImageCard_CreateInput;
};

export type IGenMutationUpdateCompImageCardArgs = {
  id: Scalars["ID"];
  merge?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompImageCard_UpdateInput;
};

export type IGenMutationDeleteCompImageCardArgs = {
  id: Scalars["ID"];
};

export type IGenMutationCreateCompButtonExternalLinksArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompButtonExternalLinks_CreateInput;
};

export type IGenMutationUpdateCompButtonExternalLinksArgs = {
  id: Scalars["ID"];
  merge?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenCompButtonExternalLinks_UpdateInput;
};

export type IGenMutationDeleteCompButtonExternalLinksArgs = {
  id: Scalars["ID"];
};

export type IGenMutationCreateAssetArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenAsset_CreateInput;
};

export type IGenMutationUpdateAssetArgs = {
  id: Scalars["ID"];
  merge?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
  input: IGenAsset_UpdateInput;
};

export type IGenMutationDeleteAssetArgs = {
  id: Scalars["ID"];
};

export enum Order {
  Asc = "ASC",
  Desc = "DESC",
}

export type IGenPage = {
  __typename?: "Page";
  id?: Maybe<Scalars["ID"]>;
  internalTitle?: Maybe<Scalars["String"]>;
  subtitle?: Maybe<Scalars["JSONObject"]>;
  slug?: Maybe<Scalars["String"]>;
  components?: Maybe<Array<Maybe<IGenPage_Components>>>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaKeywords?: Maybe<Scalars["String"]>;
  metaAuthor?: Maybe<Scalars["String"]>;
  featuredImage?: Maybe<Array<Maybe<IGenPage_FeaturedImage>>>;
  sitemapPriority?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenPageComponentsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPageFeaturedImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPage_Components =
  | IGenCompImageWithText
  | IGenCompFaq
  | IGenCompSectionHeader
  | IGenCompHeroSlider
  | IGenCompTextBlock
  | IGenCompInfographic
  | IGenCompPageHeader
  | IGenCompGrid
  | IGenCompFacts
  | IGenCaisy_Field_Document_NotFound;

export type IGenPage_Connection = {
  __typename?: "Page_Connection";
  edges?: Maybe<Array<Maybe<IGenPage_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenPage_ConnectionEdge = {
  __typename?: "Page_ConnectionEdge";
  node?: Maybe<IGenPage>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenPage_FeaturedImage =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound;

export enum Page_SitemapPriority {
  Priority100 = "Priority100",
  Priority080 = "Priority080",
  Priority060 = "Priority060",
  Priority040 = "Priority040",
}

export type IGenPage_SitemapPriority_Where = {
  eq?: InputMaybe<Page_SitemapPriority>;
};

export type IGenPage_Sort = {
  internalTitle?: InputMaybe<Order>;
  slug?: InputMaybe<Order>;
  components?: InputMaybe<Order>;
  metaTitle?: InputMaybe<Order>;
  metaDescription?: InputMaybe<Order>;
  metaKeywords?: InputMaybe<Order>;
  metaAuthor?: InputMaybe<Order>;
  featuredImage?: InputMaybe<Order>;
  sitemapPriority?: InputMaybe<Order>;
};

export type IGenPage_Where = {
  internalTitle?: InputMaybe<IGenCaisyField_String_Where>;
  subtitle?: InputMaybe<IGenCaisyField_Richtext_Where>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  metaTitle?: InputMaybe<IGenCaisyField_String_Where>;
  metaDescription?: InputMaybe<IGenCaisyField_String_Where>;
  metaKeywords?: InputMaybe<IGenCaisyField_String_Where>;
  metaAuthor?: InputMaybe<IGenCaisyField_String_Where>;
  sitemapPriority?: InputMaybe<IGenPage_SitemapPriority_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
};

export type IGenPageInfo = {
  __typename?: "PageInfo";
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type IGenQuery = {
  __typename?: "Query";
  CompBrandCategory?: Maybe<IGenCompBrandCategory>;
  allCompBrandCategory?: Maybe<IGenCompBrandCategory_Connection>;
  CompFactsFact?: Maybe<IGenCompFactsFact>;
  allCompFactsFact?: Maybe<IGenCompFactsFact_Connection>;
  CompInfographicTextBubble?: Maybe<IGenCompInfographicTextBubble>;
  allCompInfographicTextBubble?: Maybe<IGenCompInfographicTextBubble_Connection>;
  CompFaqItem?: Maybe<IGenCompFaqItem>;
  allCompFaqItem?: Maybe<IGenCompFaqItem_Connection>;
  Video?: Maybe<IGenVideo>;
  allVideo?: Maybe<IGenVideo_Connection>;
  CompFooterSection?: Maybe<IGenCompFooterSection>;
  allCompFooterSection?: Maybe<IGenCompFooterSection_Connection>;
  CompFacts?: Maybe<IGenCompFacts>;
  allCompFacts?: Maybe<IGenCompFacts_Connection>;
  CompSectionHeader?: Maybe<IGenCompSectionHeader>;
  allCompSectionHeader?: Maybe<IGenCompSectionHeader_Connection>;
  CompHeroSliderSlide?: Maybe<IGenCompHeroSliderSlide>;
  allCompHeroSliderSlide?: Maybe<IGenCompHeroSliderSlide_Connection>;
  CompFaq?: Maybe<IGenCompFaq>;
  allCompFaq?: Maybe<IGenCompFaq_Connection>;
  CompPageHeader?: Maybe<IGenCompPageHeader>;
  allCompPageHeader?: Maybe<IGenCompPageHeader_Connection>;
  Footer?: Maybe<IGenFooter>;
  CompButton?: Maybe<IGenCompButton>;
  allCompButton?: Maybe<IGenCompButton_Connection>;
  CompImageCard?: Maybe<IGenCompImageCard>;
  allCompImageCard?: Maybe<IGenCompImageCard_Connection>;
  CompTextBlock?: Maybe<IGenCompTextBlock>;
  allCompTextBlock?: Maybe<IGenCompTextBlock_Connection>;
  CompHeroSlider?: Maybe<IGenCompHeroSlider>;
  allCompHeroSlider?: Maybe<IGenCompHeroSlider_Connection>;
  CompInfographic?: Maybe<IGenCompInfographic>;
  allCompInfographic?: Maybe<IGenCompInfographic_Connection>;
  CompGridTeamMemberCard?: Maybe<IGenCompGridTeamMemberCard>;
  allCompGridTeamMemberCard?: Maybe<IGenCompGridTeamMemberCard_Connection>;
  CompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks>;
  allCompButtonExternalLinks?: Maybe<IGenCompButtonExternalLinks_Connection>;
  CompGrid?: Maybe<IGenCompGrid>;
  allCompGrid?: Maybe<IGenCompGrid_Connection>;
  MegaMenu?: Maybe<IGenMegaMenu>;
  CompGridBrandCard?: Maybe<IGenCompGridBrandCard>;
  allCompGridBrandCard?: Maybe<IGenCompGridBrandCard_Connection>;
  CompImageWithText?: Maybe<IGenCompImageWithText>;
  allCompImageWithText?: Maybe<IGenCompImageWithText_Connection>;
  Asset?: Maybe<IGenAsset>;
  allAsset?: Maybe<IGenAsset_Connection>;
  Page?: Maybe<IGenPage>;
  allPage?: Maybe<IGenPage_Connection>;
  Universaltext?: Maybe<IGenUniversaltext>;
};

export type IGenQueryCompBrandCategoryArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompBrandCategoryArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompBrandCategory_Where>>>;
};

export type IGenQueryCompFactsFactArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompFactsFactArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Where>>>;
};

export type IGenQueryCompInfographicTextBubbleArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompInfographicTextBubbleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompInfographicTextBubble_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompInfographicTextBubble_Where>>>;
};

export type IGenQueryCompFaqItemArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompFaqItemArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFaqItem_Where>>>;
};

export type IGenQueryVideoArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllVideoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenVideo_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
};

export type IGenQueryCompFooterSectionArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompFooterSectionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFooterSection_Where>>>;
};

export type IGenQueryCompFactsArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompFactsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFacts_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
};

export type IGenQueryCompSectionHeaderArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompSectionHeaderArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
};

export type IGenQueryCompHeroSliderSlideArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompHeroSliderSlideArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
};

export type IGenQueryCompFaqArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompFaqArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFaq_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
};

export type IGenQueryCompPageHeaderArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompPageHeaderArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
};

export type IGenQueryFooterArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompButtonArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompButtonArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompButton_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompButton_Where>>>;
};

export type IGenQueryCompImageCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompImageCardArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompImageCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompImageCard_Where>>>;
};

export type IGenQueryCompTextBlockArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompTextBlockArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
};

export type IGenQueryCompHeroSliderArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompHeroSliderArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
};

export type IGenQueryCompInfographicArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompInfographicArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompInfographic_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompInfographic_Where>>>;
};

export type IGenQueryCompGridTeamMemberCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompGridTeamMemberCardArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
};

export type IGenQueryCompButtonExternalLinksArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompButtonExternalLinksArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompButtonExternalLinks_Where>>>;
};

export type IGenQueryCompGridArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompGridArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompGrid_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
};

export type IGenQueryMegaMenuArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompGridBrandCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompGridBrandCardArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
};

export type IGenQueryCompImageWithTextArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllCompImageWithTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
};

export type IGenQueryAssetArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllAssetArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenAsset_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
};

export type IGenQueryPageArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllPageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  before?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenPage_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
};

export type IGenQueryUniversaltextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversaltext = {
  __typename?: "Universaltext";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  customHtml?: Maybe<Scalars["String"]>;
  customHtmlBody?: Maybe<Scalars["String"]>;
  filter_all?: Maybe<Scalars["String"]>;
  filter_current?: Maybe<Scalars["String"]>;
  filter_divested?: Maybe<Scalars["String"]>;
  copyright?: Maybe<Scalars["String"]>;
  pageNotFoundBackgroundImage?: Maybe<IGenAsset>;
  pageNotFoundDescription?: Maybe<Scalars["JSONObject"]>;
  pageNotFoundButton?: Maybe<
    Array<Maybe<IGenUniversaltext_PageNotFoundButton>>
  >;
  primaryColor?: Maybe<Scalars["String"]>;
  secondaryColor?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenUniversaltextPageNotFoundBackgroundImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversaltextPageNotFoundButtonArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversaltext_PageNotFoundButton =
  | IGenCompButton
  | IGenCompButtonExternalLinks
  | IGenCaisy_Field_Document_NotFound;

export type IGenVideo = {
  __typename?: "Video";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  vimeoVideoId?: Maybe<Scalars["String"]>;
  _meta?: Maybe<IGenCaisyDocument_Meta>;
};

export type IGenVideo_Connection = {
  __typename?: "Video_Connection";
  edges?: Maybe<Array<Maybe<IGenVideo_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenVideo_ConnectionEdge = {
  __typename?: "Video_ConnectionEdge";
  node?: Maybe<IGenVideo>;
  cursor?: Maybe<Scalars["String"]>;
};

export type IGenVideo_Sort = {
  title?: InputMaybe<Order>;
  vimeoVideoId?: InputMaybe<Order>;
};

export type IGenVideo_Where = {
  title?: InputMaybe<IGenCaisyField_String_Where>;
  vimeoVideoId?: InputMaybe<IGenCaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
};
