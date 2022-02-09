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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type IGenAsset = {
  __typename?: "Asset";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  author?: Maybe<Scalars["String"]>;
  copyright?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dominantColor?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  keywords?: Maybe<Scalars["String"]>;
  originType?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenAssetSrcArgs = {
  crop?: InputMaybe<Scalars["String"]>;
};

export type IGenAsset_Connection = {
  __typename?: "Asset_Connection";
  edges?: Maybe<Array<Maybe<IGenAsset_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenAsset_ConnectionEdge = {
  __typename?: "Asset_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenAsset>;
};

export type IGenAsset_CreateInput = {
  author?: InputMaybe<Scalars["String"]>;
  copyright?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenAsset_Sort = {
  author?: InputMaybe<Order>;
  copyright?: InputMaybe<Order>;
  description?: InputMaybe<Order>;
  dominantColor?: InputMaybe<Order>;
  keywords?: InputMaybe<Order>;
  originType?: InputMaybe<Order>;
  originalName?: InputMaybe<Order>;
  src?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenAsset_UpdateInput = {
  author?: InputMaybe<Scalars["String"]>;
  copyright?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenAsset_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_String_Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenBrandCategory = {
  __typename?: "BrandCategory";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenBrandCategory_Connection = {
  __typename?: "BrandCategory_Connection";
  edges?: Maybe<Array<Maybe<IGenBrandCategory_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenBrandCategory_ConnectionEdge = {
  __typename?: "BrandCategory_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenBrandCategory>;
};

export type IGenBrandCategory_CreateInput = {
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenBrandCategory_Sort = {
  title?: InputMaybe<Order>;
};

export type IGenBrandCategory_UpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenBrandCategory_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenBrandCategory_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenBrandCategory_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenButton = {
  __typename?: "Button";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  link?: Maybe<Array<Maybe<IGenButton_Link>>>;
  style?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenButtonLinkArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenButtonExternalLinks = {
  __typename?: "ButtonExternalLinks";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  style?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type IGenButtonExternalLinks_Connection = {
  __typename?: "ButtonExternalLinks_Connection";
  edges?: Maybe<Array<Maybe<IGenButtonExternalLinks_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenButtonExternalLinks_ConnectionEdge = {
  __typename?: "ButtonExternalLinks_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenButtonExternalLinks>;
};

export type IGenButtonExternalLinks_CreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  style?: InputMaybe<ButtonExternalLinks_Style>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type IGenButtonExternalLinks_Sort = {
  description?: InputMaybe<Order>;
  style?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
  url?: InputMaybe<Order>;
};

export enum ButtonExternalLinks_Style {
  Inverted = "Inverted",
  WithBackground = "WithBackground",
  WithoutBackground = "WithoutBackground",
}

export type IGenButtonExternalLinks_Style_Where = {
  eq?: InputMaybe<ButtonExternalLinks_Style>;
};

export type IGenButtonExternalLinks_UpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  style?: InputMaybe<ButtonExternalLinks_Style>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type IGenButtonExternalLinks_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenButtonExternalLinks_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenButtonExternalLinks_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  style?: InputMaybe<IGenButtonExternalLinks_Style_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  url?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenButton_Connection = {
  __typename?: "Button_Connection";
  edges?: Maybe<Array<Maybe<IGenButton_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenButton_ConnectionEdge = {
  __typename?: "Button_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenButton>;
};

export type IGenButton_CreateInput = {
  link?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  style?: InputMaybe<Button_Style>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenButton_Sort = {
  link?: InputMaybe<Order>;
  style?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export enum Button_Style {
  Inverted = "Inverted",
  WithBackground = "WithBackground",
  WithoutBackground = "WithoutBackground",
}

export type IGenButton_Style_Where = {
  eq?: InputMaybe<Button_Style>;
};

export type IGenButton_UpdateInput = {
  link?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  style?: InputMaybe<Button_Style>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenButton_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenButton_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenButton_Where>>>;
  style?: InputMaybe<IGenButton_Style_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenButton_Link = IGenCaisy_Field_Document_NotFound | IGenPage;

export type IGenCaisyDocument_Meta = {
  __typename?: "CaisyDocument_Meta";
  id?: Maybe<Scalars["ID"]>;
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type IGenCaisyField_String_Where = {
  contains?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

export type IGenCaisy_Document =
  | IGenAsset
  | IGenBrandCategory
  | IGenButton
  | IGenButtonExternalLinks
  | IGenCaisy_Document_NotFound
  | IGenCompFacts
  | IGenCompFactsFact
  | IGenCompFaq
  | IGenCompGrid
  | IGenCompGridBrandCard
  | IGenCompGridTeamMemberCard
  | IGenCompHeroSlider
  | IGenCompHeroSliderSlide
  | IGenCompImageWithText
  | IGenCompInfographic
  | IGenCompInfographicTextBubble
  | IGenCompPageHeader
  | IGenCompSectionHeader
  | IGenCompTextBlock
  | IGenFaqItem
  | IGenFooter
  | IGenFooterSection
  | IGenImageCard
  | IGenMegaMenu
  | IGenPage
  | IGenUniversaltext
  | IGenVideo;

export type IGenCaisy_Document_NotFound = {
  __typename?: "Caisy_Document_NotFound";
  message?: Maybe<Scalars["String"]>;
};

export type IGenCaisy_Field_Document_NotFound = {
  __typename?: "Caisy_Field_Document_NotFound";
  id?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type IGenCompFacts = {
  __typename?: "CompFacts";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  facts?: Maybe<Array<Maybe<IGenCompFacts_Facts>>>;
  id?: Maybe<Scalars["ID"]>;
  /** (internal only) */
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompFactsFactsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompFactsFact = {
  __typename?: "CompFactsFact";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  label?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type IGenCompFactsFact_Connection = {
  __typename?: "CompFactsFact_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFactsFact_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFactsFact_ConnectionEdge = {
  __typename?: "CompFactsFact_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompFactsFact>;
};

export type IGenCompFactsFact_Sort = {
  label?: InputMaybe<Order>;
  value?: InputMaybe<Order>;
};

export type IGenCompFactsFact_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Where>>>;
  label?: InputMaybe<IGenCaisyField_String_Where>;
  value?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFacts_Connection = {
  __typename?: "CompFacts_Connection";
  edges?: Maybe<Array<Maybe<IGenCompFacts_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompFacts_ConnectionEdge = {
  __typename?: "CompFacts_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompFacts>;
};

export type IGenCompFacts_Sort = {
  facts?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenCompFacts_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFacts_Facts =
  | IGenCaisy_Field_Document_NotFound
  | IGenCompFactsFact;

export type IGenCompFaq = {
  __typename?: "CompFaq";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  appearance?: Maybe<Scalars["JSON"]>;
  faqItems?: Maybe<Array<Maybe<IGenCompFaq_FaqItems>>>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
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
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompFaq>;
};

export type IGenCompFaq_Sort = {
  appearance?: InputMaybe<Order>;
  faqItems?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenCompFaq_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompFaq_FaqItems =
  | IGenCaisy_Field_Document_NotFound
  | IGenFaqItem;

export type IGenCompGrid = {
  __typename?: "CompGrid";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  items?: Maybe<Array<Maybe<IGenCompGrid_Items>>>;
  numberOfColumns?: Maybe<Scalars["String"]>;
  /** (internal only) */
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompGridItemsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridBrandCard = {
  __typename?: "CompGridBrandCard";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  category?: Maybe<Array<Maybe<IGenCompGridBrandCard_Category>>>;
  /** (optional and only is displayed if "withDescription" is selected) */
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  linksTo?: Maybe<Scalars["String"]>;
  logo?: Maybe<IGenAsset>;
  name?: Maybe<Scalars["String"]>;
  style?: Maybe<Scalars["String"]>;
};

export type IGenCompGridBrandCardCategoryArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridBrandCardLogoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompGridBrandCard_Connection = {
  __typename?: "CompGridBrandCard_Connection";
  edges?: Maybe<Array<Maybe<IGenCompGridBrandCard_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompGridBrandCard_ConnectionEdge = {
  __typename?: "CompGridBrandCard_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompGridBrandCard>;
};

export type IGenCompGridBrandCard_Sort = {
  category?: InputMaybe<Order>;
  description?: InputMaybe<Order>;
  linksTo?: InputMaybe<Order>;
  logo?: InputMaybe<Order>;
  name?: InputMaybe<Order>;
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
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  linksTo?: InputMaybe<IGenCaisyField_String_Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
  style?: InputMaybe<IGenCompGridBrandCard_Style_Where>;
};

export type IGenCompGridBrandCard_Category =
  | IGenBrandCategory
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompGridTeamMemberCard = {
  __typename?: "CompGridTeamMemberCard";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<IGenAsset>;
  jobTitle?: Maybe<Scalars["String"]>;
  linkToLinkedInProfile?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
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
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompGridTeamMemberCard>;
};

export type IGenCompGridTeamMemberCard_Sort = {
  image?: InputMaybe<Order>;
  jobTitle?: InputMaybe<Order>;
  linkToLinkedInProfile?: InputMaybe<Order>;
  name?: InputMaybe<Order>;
};

export type IGenCompGridTeamMemberCard_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
  jobTitle?: InputMaybe<IGenCaisyField_String_Where>;
  linkToLinkedInProfile?: InputMaybe<IGenCaisyField_String_Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompGrid_Connection = {
  __typename?: "CompGrid_Connection";
  edges?: Maybe<Array<Maybe<IGenCompGrid_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompGrid_ConnectionEdge = {
  __typename?: "CompGrid_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompGrid>;
};

export enum CompGrid_NumberOfColumns {
  Use2ColumnsToCenter = "Use2ColumnsToCenter",
  Use3Columns = "Use3Columns",
  Use4Columns = "Use4Columns",
}

export type IGenCompGrid_NumberOfColumns_Where = {
  eq?: InputMaybe<CompGrid_NumberOfColumns>;
};

export type IGenCompGrid_Sort = {
  headline?: InputMaybe<Order>;
  items?: InputMaybe<Order>;
  numberOfColumns?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenCompGrid_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  numberOfColumns?: InputMaybe<IGenCompGrid_NumberOfColumns_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompGrid_Items =
  | IGenCaisy_Field_Document_NotFound
  | IGenCompGridBrandCard
  | IGenCompGridTeamMemberCard;

export type IGenCompHeroSlider = {
  __typename?: "CompHeroSlider";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  slides?: Maybe<Array<Maybe<IGenCompHeroSlider_Slides>>>;
  style?: Maybe<Scalars["JSON"]>;
  /** (internal only) */
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlidesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlide = {
  __typename?: "CompHeroSliderSlide";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  backgroundImage?: Maybe<
    Array<Maybe<IGenCompHeroSliderSlide_BackgroundImage>>
  >;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  /** text in the center of the slide (optional) */
  text?: Maybe<Scalars["JSONObject"]>;
};

export type IGenCompHeroSliderSlideBackgroundImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompHeroSliderSlide_Connection = {
  __typename?: "CompHeroSliderSlide_Connection";
  edges?: Maybe<Array<Maybe<IGenCompHeroSliderSlide_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompHeroSliderSlide_ConnectionEdge = {
  __typename?: "CompHeroSliderSlide_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompHeroSliderSlide>;
};

export type IGenCompHeroSliderSlide_Sort = {
  backgroundImage?: InputMaybe<Order>;
  headline?: InputMaybe<Order>;
  text?: InputMaybe<Order>;
};

export type IGenCompHeroSliderSlide_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompHeroSliderSlide_BackgroundImage =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound
  | IGenVideo;

export type IGenCompHeroSlider_Connection = {
  __typename?: "CompHeroSlider_Connection";
  edges?: Maybe<Array<Maybe<IGenCompHeroSlider_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompHeroSlider_ConnectionEdge = {
  __typename?: "CompHeroSlider_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompHeroSlider>;
};

export type IGenCompHeroSlider_Sort = {
  slides?: InputMaybe<Order>;
  style?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenCompHeroSlider_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompHeroSlider_Slides =
  | IGenCaisy_Field_Document_NotFound
  | IGenCompHeroSliderSlide;

export type IGenCompImageWithText = {
  __typename?: "CompImageWithText";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  asset?: Maybe<Array<Maybe<IGenCompImageWithText_Asset>>>;
  buttons?: Maybe<Array<Maybe<IGenCompImageWithText_Buttons>>>;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  imageLeftTextRight?: Maybe<Scalars["JSON"]>;
  imageRightInsteadOfLeft?: Maybe<Scalars["Boolean"]>;
  imageRightTextLeft?: Maybe<Scalars["JSON"]>;
  /** small phrase above the headline */
  strap?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["JSONObject"]>;
};

export type IGenCompImageWithTextAssetArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithTextButtonsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompImageWithText_Connection = {
  __typename?: "CompImageWithText_Connection";
  edges?: Maybe<Array<Maybe<IGenCompImageWithText_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompImageWithText_ConnectionEdge = {
  __typename?: "CompImageWithText_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompImageWithText>;
};

export type IGenCompImageWithText_Sort = {
  asset?: InputMaybe<Order>;
  buttons?: InputMaybe<Order>;
  headline?: InputMaybe<Order>;
  imageLeftTextRight?: InputMaybe<Order>;
  imageRightInsteadOfLeft?: InputMaybe<Order>;
  imageRightTextLeft?: InputMaybe<Order>;
  strap?: InputMaybe<Order>;
  text?: InputMaybe<Order>;
};

export type IGenCompImageWithText_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  imageRightInsteadOfLeft?: InputMaybe<Scalars["Boolean"]>;
  strap?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompImageWithText_Asset =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompImageWithText_Buttons =
  | IGenButton
  | IGenButtonExternalLinks
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompInfographic = {
  __typename?: "CompInfographic";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  bubbles?: Maybe<Array<Maybe<IGenCompInfographic_Bubbles>>>;
  id?: Maybe<Scalars["ID"]>;
  images?: Maybe<Array<Maybe<IGenCompInfographic_Images>>>;
  style?: Maybe<Scalars["JSON"]>;
  /** (internal only) */
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompInfographicBubblesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompInfographicImagesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompInfographicTextBubble = {
  __typename?: "CompInfographicTextBubble";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  subheadline?: Maybe<Scalars["String"]>;
};

export type IGenCompInfographicTextBubble_Connection = {
  __typename?: "CompInfographicTextBubble_Connection";
  edges?: Maybe<Array<Maybe<IGenCompInfographicTextBubble_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompInfographicTextBubble_ConnectionEdge = {
  __typename?: "CompInfographicTextBubble_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompInfographicTextBubble>;
};

export type IGenCompInfographicTextBubble_Sort = {
  headline?: InputMaybe<Order>;
  subheadline?: InputMaybe<Order>;
};

export type IGenCompInfographicTextBubble_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompInfographicTextBubble_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompInfographicTextBubble_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompInfographic_Connection = {
  __typename?: "CompInfographic_Connection";
  edges?: Maybe<Array<Maybe<IGenCompInfographic_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompInfographic_ConnectionEdge = {
  __typename?: "CompInfographic_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompInfographic>;
};

export type IGenCompInfographic_Sort = {
  bubbles?: InputMaybe<Order>;
  images?: InputMaybe<Order>;
  style?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenCompInfographic_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompInfographic_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompInfographic_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompInfographic_Bubbles =
  | IGenCaisy_Field_Document_NotFound
  | IGenCompInfographicTextBubble;

export type IGenCompInfographic_Images =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound;

export type IGenCompPageHeader = {
  __typename?: "CompPageHeader";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  backgroundImage?: Maybe<Array<Maybe<IGenCompPageHeader_BackgroundImage>>>;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  style?: Maybe<Scalars["JSON"]>;
};

export type IGenCompPageHeaderBackgroundImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompPageHeader_Connection = {
  __typename?: "CompPageHeader_Connection";
  edges?: Maybe<Array<Maybe<IGenCompPageHeader_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompPageHeader_ConnectionEdge = {
  __typename?: "CompPageHeader_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompPageHeader>;
};

export type IGenCompPageHeader_Sort = {
  backgroundImage?: InputMaybe<Order>;
  headline?: InputMaybe<Order>;
  style?: InputMaybe<Order>;
};

export type IGenCompPageHeader_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompPageHeader_BackgroundImage =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound
  | IGenVideo;

export type IGenCompSectionHeader = {
  __typename?: "CompSectionHeader";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<Array<Maybe<IGenCompSectionHeader_Image>>>;
  style?: Maybe<Scalars["JSON"]>;
  title?: Maybe<Scalars["String"]>;
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
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompSectionHeader>;
};

export type IGenCompSectionHeader_Sort = {
  image?: InputMaybe<Order>;
  style?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenCompSectionHeader_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompSectionHeader_Image =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound
  | IGenVideo;

export type IGenCompTextBlock = {
  __typename?: "CompTextBlock";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  buttons?: Maybe<Array<Maybe<IGenCompTextBlock_Buttons>>>;
  id?: Maybe<Scalars["ID"]>;
  text?: Maybe<Scalars["JSONObject"]>;
  /** (internal only) */
  title?: Maybe<Scalars["String"]>;
};

export type IGenCompTextBlockButtonsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenCompTextBlock_Connection = {
  __typename?: "CompTextBlock_Connection";
  edges?: Maybe<Array<Maybe<IGenCompTextBlock_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCompTextBlock_ConnectionEdge = {
  __typename?: "CompTextBlock_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCompTextBlock>;
};

export type IGenCompTextBlock_Sort = {
  buttons?: InputMaybe<Order>;
  text?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenCompTextBlock_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
  text?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCompTextBlock_Buttons =
  | IGenButton
  | IGenButtonExternalLinks
  | IGenCaisy_Field_Document_NotFound;

export type IGenFaqItem = {
  __typename?: "FaqItem";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  description?: Maybe<Scalars["JSONObject"]>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenFaqItem_Connection = {
  __typename?: "FaqItem_Connection";
  edges?: Maybe<Array<Maybe<IGenFaqItem_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenFaqItem_ConnectionEdge = {
  __typename?: "FaqItem_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenFaqItem>;
};

export type IGenFaqItem_CreateInput = {
  description?: InputMaybe<Scalars["JSONObject"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenFaqItem_Sort = {
  description?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenFaqItem_UpdateInput = {
  description?: InputMaybe<Scalars["JSONObject"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenFaqItem_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFaqItem_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFaqItem_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFooter = {
  __typename?: "Footer";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  legalSection?: Maybe<Array<Maybe<IGenFooter_LegalSection>>>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenFooterLegalSectionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenFooterSection = {
  __typename?: "FooterSection";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  links?: Maybe<Array<Maybe<IGenFooterSection_Links>>>;
  sectionTitle?: Maybe<Scalars["String"]>;
};

export type IGenFooterSectionLinksArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenFooterSection_Connection = {
  __typename?: "FooterSection_Connection";
  edges?: Maybe<Array<Maybe<IGenFooterSection_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenFooterSection_ConnectionEdge = {
  __typename?: "FooterSection_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenFooterSection>;
};

export type IGenFooterSection_CreateInput = {
  links?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  sectionTitle?: InputMaybe<Scalars["String"]>;
};

export type IGenFooterSection_Sort = {
  links?: InputMaybe<Order>;
  sectionTitle?: InputMaybe<Order>;
};

export type IGenFooterSection_UpdateInput = {
  links?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  sectionTitle?: InputMaybe<Scalars["String"]>;
};

export type IGenFooterSection_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFooterSection_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFooterSection_Where>>>;
  sectionTitle?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFooterSection_Links =
  | IGenButton
  | IGenButtonExternalLinks
  | IGenCaisy_Field_Document_NotFound;

export type IGenFooter_LegalSection =
  | IGenButton
  | IGenButtonExternalLinks
  | IGenCaisy_Field_Document_NotFound;

export type IGenImageCard = {
  __typename?: "ImageCard";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<IGenAsset>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenImageCardImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenImageCard_Connection = {
  __typename?: "ImageCard_Connection";
  edges?: Maybe<Array<Maybe<IGenImageCard_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenImageCard_ConnectionEdge = {
  __typename?: "ImageCard_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenImageCard>;
};

export type IGenImageCard_CreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenImageCard_Sort = {
  description?: InputMaybe<Order>;
  image?: InputMaybe<Order>;
  title?: InputMaybe<Order>;
};

export type IGenImageCard_UpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenImageCard_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenImageCard_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenImageCard_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenMegaMenu = {
  __typename?: "MegaMenu";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  home?: Maybe<Array<Maybe<IGenMegaMenu_Home>>>;
  id?: Maybe<Scalars["ID"]>;
  logo?: Maybe<IGenAsset>;
  logoDarkVersion?: Maybe<IGenAsset>;
  mainNavigation?: Maybe<Array<Maybe<IGenMegaMenu_MainNavigation>>>;
  /** (internal only) */
  title?: Maybe<Scalars["String"]>;
};

export type IGenMegaMenuHomeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMegaMenuLogoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMegaMenuLogoDarkVersionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMegaMenuMainNavigationArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMegaMenu_Home = IGenCaisy_Field_Document_NotFound | IGenPage;

export type IGenMegaMenu_MainNavigation =
  | IGenCaisy_Field_Document_NotFound
  | IGenPage;

export type IGenMutation = {
  __typename?: "Mutation";
  createAsset?: Maybe<IGenAsset>;
  createBrandCategory?: Maybe<IGenBrandCategory>;
  createButton?: Maybe<IGenButton>;
  createButtonExternalLinks?: Maybe<IGenButtonExternalLinks>;
  createFaqItem?: Maybe<IGenFaqItem>;
  createFooterSection?: Maybe<IGenFooterSection>;
  createImageCard?: Maybe<IGenImageCard>;
  removeAsset?: Maybe<Scalars["Boolean"]>;
  removeBrandCategory?: Maybe<Scalars["Boolean"]>;
  removeButton?: Maybe<Scalars["Boolean"]>;
  removeButtonExternalLinks?: Maybe<Scalars["Boolean"]>;
  removeFaqItem?: Maybe<Scalars["Boolean"]>;
  removeFooterSection?: Maybe<Scalars["Boolean"]>;
  removeImageCard?: Maybe<Scalars["Boolean"]>;
  updateAsset?: Maybe<IGenAsset>;
  updateBrandCategory?: Maybe<IGenBrandCategory>;
  updateButton?: Maybe<IGenButton>;
  updateButtonExternalLinks?: Maybe<IGenButtonExternalLinks>;
  updateFaqItem?: Maybe<IGenFaqItem>;
  updateFooterSection?: Maybe<IGenFooterSection>;
  updateImageCard?: Maybe<IGenImageCard>;
};

export type IGenMutationCreateAssetArgs = {
  input: IGenAsset_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateBrandCategoryArgs = {
  input: IGenBrandCategory_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateButtonArgs = {
  input: IGenButton_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateButtonExternalLinksArgs = {
  input: IGenButtonExternalLinks_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateFaqItemArgs = {
  input: IGenFaqItem_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateFooterSectionArgs = {
  input: IGenFooterSection_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateImageCardArgs = {
  input: IGenImageCard_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationRemoveAssetArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationRemoveBrandCategoryArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationRemoveButtonArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationRemoveButtonExternalLinksArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationRemoveFaqItemArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationRemoveFooterSectionArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationRemoveImageCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationUpdateAssetArgs = {
  id: Scalars["ID"];
  input: IGenAsset_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateBrandCategoryArgs = {
  id: Scalars["ID"];
  input: IGenBrandCategory_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateButtonArgs = {
  id: Scalars["ID"];
  input: IGenButton_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateButtonExternalLinksArgs = {
  id: Scalars["ID"];
  input: IGenButtonExternalLinks_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateFaqItemArgs = {
  id: Scalars["ID"];
  input: IGenFaqItem_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateFooterSectionArgs = {
  id: Scalars["ID"];
  input: IGenFooterSection_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateImageCardArgs = {
  id: Scalars["ID"];
  input: IGenImageCard_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export enum Order {
  Asc = "ASC",
  Desc = "DESC",
}

export type IGenPage = {
  __typename?: "Page";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  components?: Maybe<Array<Maybe<IGenPage_Components>>>;
  featuredImage?: Maybe<Array<Maybe<IGenPage_FeaturedImage>>>;
  id?: Maybe<Scalars["ID"]>;
  internalTitle?: Maybe<Scalars["String"]>;
  metaAuthor?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaKeywords?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  sitemapPriority?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type IGenPageComponentsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPageFeaturedImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
  startCursor?: Maybe<Scalars["String"]>;
};

export type IGenPage_Connection = {
  __typename?: "Page_Connection";
  edges?: Maybe<Array<Maybe<IGenPage_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenPage_ConnectionEdge = {
  __typename?: "Page_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenPage>;
};

export enum Page_SitemapPriority {
  Priority040 = "Priority040",
  Priority060 = "Priority060",
  Priority080 = "Priority080",
  Priority100 = "Priority100",
}

export type IGenPage_SitemapPriority_Where = {
  eq?: InputMaybe<Page_SitemapPriority>;
};

export type IGenPage_Sort = {
  components?: InputMaybe<Order>;
  featuredImage?: InputMaybe<Order>;
  internalTitle?: InputMaybe<Order>;
  metaAuthor?: InputMaybe<Order>;
  metaDescription?: InputMaybe<Order>;
  metaKeywords?: InputMaybe<Order>;
  metaTitle?: InputMaybe<Order>;
  sitemapPriority?: InputMaybe<Order>;
  slug?: InputMaybe<Order>;
};

export type IGenPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  internalTitle?: InputMaybe<IGenCaisyField_String_Where>;
  metaAuthor?: InputMaybe<IGenCaisyField_String_Where>;
  metaDescription?: InputMaybe<IGenCaisyField_String_Where>;
  metaKeywords?: InputMaybe<IGenCaisyField_String_Where>;
  metaTitle?: InputMaybe<IGenCaisyField_String_Where>;
  sitemapPriority?: InputMaybe<IGenPage_SitemapPriority_Where>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenPage_Components =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound
  | IGenCompFacts
  | IGenCompFaq
  | IGenCompGrid
  | IGenCompHeroSlider
  | IGenCompImageWithText
  | IGenCompInfographic
  | IGenCompPageHeader
  | IGenCompSectionHeader
  | IGenCompTextBlock
  | IGenVideo;

export type IGenPage_FeaturedImage =
  | IGenAsset
  | IGenCaisy_Field_Document_NotFound;

export type IGenQuery = {
  __typename?: "Query";
  Asset?: Maybe<IGenAsset>;
  BrandCategory?: Maybe<IGenBrandCategory>;
  Button?: Maybe<IGenButton>;
  ButtonExternalLinks?: Maybe<IGenButtonExternalLinks>;
  Caisy_Document?: Maybe<IGenCaisy_Document>;
  CompFacts?: Maybe<IGenCompFacts>;
  CompFactsFact?: Maybe<IGenCompFactsFact>;
  CompFaq?: Maybe<IGenCompFaq>;
  CompGrid?: Maybe<IGenCompGrid>;
  CompGridBrandCard?: Maybe<IGenCompGridBrandCard>;
  CompGridTeamMemberCard?: Maybe<IGenCompGridTeamMemberCard>;
  CompHeroSlider?: Maybe<IGenCompHeroSlider>;
  CompHeroSliderSlide?: Maybe<IGenCompHeroSliderSlide>;
  CompImageWithText?: Maybe<IGenCompImageWithText>;
  CompInfographic?: Maybe<IGenCompInfographic>;
  CompInfographicTextBubble?: Maybe<IGenCompInfographicTextBubble>;
  CompPageHeader?: Maybe<IGenCompPageHeader>;
  CompSectionHeader?: Maybe<IGenCompSectionHeader>;
  CompTextBlock?: Maybe<IGenCompTextBlock>;
  FaqItem?: Maybe<IGenFaqItem>;
  Footer?: Maybe<IGenFooter>;
  FooterSection?: Maybe<IGenFooterSection>;
  ImageCard?: Maybe<IGenImageCard>;
  MegaMenu?: Maybe<IGenMegaMenu>;
  Page?: Maybe<IGenPage>;
  Universaltext?: Maybe<IGenUniversaltext>;
  Video?: Maybe<IGenVideo>;
  allAsset?: Maybe<IGenAsset_Connection>;
  allBrandCategory?: Maybe<IGenBrandCategory_Connection>;
  allButton?: Maybe<IGenButton_Connection>;
  allButtonExternalLinks?: Maybe<IGenButtonExternalLinks_Connection>;
  allCompFacts?: Maybe<IGenCompFacts_Connection>;
  allCompFactsFact?: Maybe<IGenCompFactsFact_Connection>;
  allCompFaq?: Maybe<IGenCompFaq_Connection>;
  allCompGrid?: Maybe<IGenCompGrid_Connection>;
  allCompGridBrandCard?: Maybe<IGenCompGridBrandCard_Connection>;
  allCompGridTeamMemberCard?: Maybe<IGenCompGridTeamMemberCard_Connection>;
  allCompHeroSlider?: Maybe<IGenCompHeroSlider_Connection>;
  allCompHeroSliderSlide?: Maybe<IGenCompHeroSliderSlide_Connection>;
  allCompImageWithText?: Maybe<IGenCompImageWithText_Connection>;
  allCompInfographic?: Maybe<IGenCompInfographic_Connection>;
  allCompInfographicTextBubble?: Maybe<IGenCompInfographicTextBubble_Connection>;
  allCompPageHeader?: Maybe<IGenCompPageHeader_Connection>;
  allCompSectionHeader?: Maybe<IGenCompSectionHeader_Connection>;
  allCompTextBlock?: Maybe<IGenCompTextBlock_Connection>;
  allFaqItem?: Maybe<IGenFaqItem_Connection>;
  allFooterSection?: Maybe<IGenFooterSection_Connection>;
  allImageCard?: Maybe<IGenImageCard_Connection>;
  allPage?: Maybe<IGenPage_Connection>;
  allVideo?: Maybe<IGenVideo_Connection>;
};

export type IGenQueryAssetArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryBrandCategoryArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryButtonArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryButtonExternalLinksArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCaisy_DocumentArgs = {
  id?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompFactsArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompFactsFactArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompFaqArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompGridArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompGridBrandCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompGridTeamMemberCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompHeroSliderArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompHeroSliderSlideArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompImageWithTextArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompInfographicArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompInfographicTextBubbleArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompPageHeaderArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompSectionHeaderArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCompTextBlockArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryFaqItemArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryFooterArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryFooterSectionArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryImageCardArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryMegaMenuArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryPageArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryUniversaltextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryVideoArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllAssetArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenAsset_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
};

export type IGenQueryAllBrandCategoryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenBrandCategory_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenBrandCategory_Where>>>;
};

export type IGenQueryAllButtonArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenButton_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenButton_Where>>>;
};

export type IGenQueryAllButtonExternalLinksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenButtonExternalLinks_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenButtonExternalLinks_Where>>>;
};

export type IGenQueryAllCompFactsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFacts_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFacts_Where>>>;
};

export type IGenQueryAllCompFactsFactArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFactsFact_Where>>>;
};

export type IGenQueryAllCompFaqArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompFaq_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompFaq_Where>>>;
};

export type IGenQueryAllCompGridArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompGrid_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompGrid_Where>>>;
};

export type IGenQueryAllCompGridBrandCardArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompGridBrandCard_Where>>>;
};

export type IGenQueryAllCompGridTeamMemberCardArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompGridTeamMemberCard_Where>>>;
};

export type IGenQueryAllCompHeroSliderArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompHeroSlider_Where>>>;
};

export type IGenQueryAllCompHeroSliderSlideArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompHeroSliderSlide_Where>>>;
};

export type IGenQueryAllCompImageWithTextArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompImageWithText_Where>>>;
};

export type IGenQueryAllCompInfographicArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompInfographic_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompInfographic_Where>>>;
};

export type IGenQueryAllCompInfographicTextBubbleArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompInfographicTextBubble_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompInfographicTextBubble_Where>>>;
};

export type IGenQueryAllCompPageHeaderArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompPageHeader_Where>>>;
};

export type IGenQueryAllCompSectionHeaderArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompSectionHeader_Where>>>;
};

export type IGenQueryAllCompTextBlockArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCompTextBlock_Where>>>;
};

export type IGenQueryAllFaqItemArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenFaqItem_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFaqItem_Where>>>;
};

export type IGenQueryAllFooterSectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenFooterSection_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFooterSection_Where>>>;
};

export type IGenQueryAllImageCardArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenImageCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenImageCard_Where>>>;
};

export type IGenQueryAllPageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenPage_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
};

export type IGenQueryAllVideoArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenVideo_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
};

export type IGenUniversaltext = {
  __typename?: "Universaltext";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  copyright?: Maybe<Scalars["String"]>;
  customHtml?: Maybe<Scalars["String"]>;
  customHtmlBody?: Maybe<Scalars["String"]>;
  filter_all?: Maybe<Scalars["String"]>;
  filter_current?: Maybe<Scalars["String"]>;
  filter_divested?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  pageNotFoundBackgroundImage?: Maybe<IGenAsset>;
  pageNotFoundButton?: Maybe<
    Array<Maybe<IGenUniversaltext_PageNotFoundButton>>
  >;
  pageNotFoundDescription?: Maybe<Scalars["JSONObject"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenUniversaltextPageNotFoundBackgroundImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversaltextPageNotFoundButtonArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenUniversaltext_PageNotFoundButton =
  | IGenButton
  | IGenButtonExternalLinks
  | IGenCaisy_Field_Document_NotFound;

export type IGenVideo = {
  __typename?: "Video";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  /** (internal only) */
  title?: Maybe<Scalars["String"]>;
  /** https://vimeo.com/manage/videos/582844871 -> 582844871 */
  vimeoVideoId?: Maybe<Scalars["String"]>;
};

export type IGenVideo_Connection = {
  __typename?: "Video_Connection";
  edges?: Maybe<Array<Maybe<IGenVideo_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenVideo_ConnectionEdge = {
  __typename?: "Video_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenVideo>;
};

export type IGenVideo_Sort = {
  title?: InputMaybe<Order>;
  vimeoVideoId?: InputMaybe<Order>;
};

export type IGenVideo_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenVideo_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  vimeoVideoId?: InputMaybe<IGenCaisyField_String_Where>;
};
