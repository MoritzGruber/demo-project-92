import { gql } from "@apollo/client";
import { f_button } from "./fragments/f_button";
import { f_button_external_links } from "./fragments/f_link";
import { f_no_document } from "./fragments/f_no_document";

export const q_footer = gql`
  ${f_button}
  ${f_button_external_links}
  ${f_no_document}
  query q_footer($locale: String!) {
    Footer(locale: $locale) {
      __typename
      id
      sections(locale: $locale) {
        ... on CompFooterSection {
          __typename
          id
          sectionTitle
          links(locale: $locale) {
            ...CompButton
            ...CompButtonExternalLinks
            ...NoDoc
          }
        }
        ...NoDoc
      }
      legalSection(locale: $locale) {
        ...CompButton
        ...CompButtonExternalLinks
        ...NoDoc
      }
    }
  }
`;
