import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  grid-column: 7 / 16;
  grid-row: 3;
  margin-top: 24px;
`;

const Silver = css`
  grid-column: 14 / 23;
  grid-row: 1;
  margin-top: 34px;
`;

const Gold = css`
  grid-column: 22 / 32;
  grid-row: 1;
  margin-top: 0;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompInfographicBubble3 = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
