import { gql } from "@apollo/client";
import { f_no_document } from "./fragments/f_no_document";
import { f_page } from "./fragments/f_page";

export const q_index = gql`
  ${f_page}
  ${f_no_document}
  query q_index($locale: String!) {
    MegaMenu(locale: $locale) {
      home(locale: $locale) {
        ...Page
        ...NoDoc
      }
    }
  }
`;
