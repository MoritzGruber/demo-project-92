import { gql } from "@apollo/client";
import { f_asset } from "./f_asset";
import { f_button } from "./f_button";
import { f_button_external_links } from "./f_link";
import { f_no_document } from "./f_no_document";

export const f_page = gql`
  ${f_asset}
  ${f_no_document}
  ${f_button}
  ${f_button_external_links}

  fragment Page on Page {
    id
    slug
    internalTitle
    metaDescription
    metaTitle
    metaKeywords
    metaAuthor
    # featuredImage {
    #   ...Asset
    #   ...NoDoc
    # }
    components(locale: $locale) {
      ... on CompFaq {
        __typename
        id
        title
        faqItems(locale: $locale) {
          ... on FaqItem {
            __typename
            id
            title
            description
          }
          ...NoDoc
        }
      }
      ... on CompHeroSlider {
        slides(locale: $locale) {
          ... on CompHeroSliderSlide {
            id
            backgroundImage(locale: $locale) {
              ...Asset
              ...NoDoc
            }
            headline
            text
          }
        }
      }
      ... on CompImageWithText {
        __typename
        imageRightInsteadOfLeft
        id
        headline
        strap
        text
        imageRightInsteadOfLeft
        buttons(locale: $locale) {
          ...Button
          ...ButtonExternalLinks
          ...NoDoc
        }
        asset(locale: $locale) {
          ...Asset
          ...NoDoc
        }
      }
      ... on CompSectionHeader {
        __typename
        id
        title
        image(locale: $locale) {
          ...Asset
        }
      }
      ... on CompPageHeader {
        id
        headline
        backgroundImage {
          ...Asset
        }
      }
      ... on CompInfographic {
        id
        bubbles(locale: $locale) {
          ... on CompInfographicTextBubble {
            id
            subheadline
            headline
          }
        }
        images(locale: $locale) {
          ... on Asset {
            ...Asset
          }
        }
      }
      ... on CompTextBlock {
        id
        text
        buttons(locale: $locale) {
          ...Button
          ...ButtonExternalLinks
          ...NoDoc
        }
        __typename
      }
      ... on CompFacts {
        facts(locale: $locale) {
          ... on CompFactsFact {
            value
            label
          }
        }
      }
      ... on CompGrid {
        id
        numberOfColumns
        headline
        items(locale: $locale) {
          __typename
          ... on CompGridBrandCard {
            logo {
              ...Asset
            }
            description
            name
            style
            linksTo
            id
            category(locale: $locale) {
              ... on BrandCategory {
                __typename
                id
                title
              }
            }
          }
          ... on CompGridTeamMemberCard {
            id
            name
            jobTitle
            image {
              ...Asset
            }
            linkToLinkedInProfile
          }
        }
      }
    }
  }
`;
