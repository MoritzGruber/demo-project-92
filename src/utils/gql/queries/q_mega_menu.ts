import { gql } from "@apollo/client";
import { f_asset } from "./fragments/f_asset";
import { f_no_document } from "./fragments/f_no_document";

export const q_mega_menu = gql`
  ${f_asset}
  ${f_no_document}
  query q_mega_menu($locale: String!) {
    MegaMenu(locale: $locale) {
      logo(locale: $locale) {
        ...Asset
      }
      logoDarkVersion(locale: $locale) {
        ...Asset
      }
      title
      id
      home(locale: $locale) {
        ... on Page {
          __typename
          id
          slug
        }
      }
      mainNavigation(locale: $locale) {
        ... on Page {
          __typename
          id
          internalTitle
          slug
        }
        ...NoDoc
      }
    }
  }
`;
