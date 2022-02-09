import { gql } from "@apollo/client";

export const f_no_document = gql`
  fragment NoDoc on Caisy_Field_Document_NotFound {
    __typename
    message
  }
`;
