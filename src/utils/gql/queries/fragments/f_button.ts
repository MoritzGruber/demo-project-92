import { gql } from "@apollo/client";

export const f_button = gql`
  fragment Button on Button {
    __typename
    id
    title
    style
    link(locale: $locale) {
      ... on Page {
        slug
      }
    }
  }
`;
