import { css } from "styled-components";

export const CSSScrollbars = css`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(80, 100, 180, 0.8);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(29, 0, 84, 0.8);
    transition: 400ms background-color;
    cursor: pointer;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #1d0054;
  }
`;
