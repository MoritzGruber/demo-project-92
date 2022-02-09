import { gql } from "@apollo/client";

export const f_button_external_links = gql`
  fragment ButtonExternalLinks on ButtonExternalLinks {
    __typename
    id
    title
    style
    url
  }
`;
