import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  grid-column: 7 / 16;
  grid-row: 1;
`;

const Silver = css`
  grid-column: 1 / 9;
  grid-row: 2;
  margin-top: -147px;
`;

const Gold = css`
  grid-column: 1 / 9;
  grid-row: 1;
  margin-top: 80px;
`;

const Platinum = css`

`;

const Diamond = css``;

export const SCompInfographicBubble1 = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
