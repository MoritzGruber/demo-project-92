import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  grid-column: 1 / 6;
  grid-row: 1;
  margin-top: 73px;
`;

const Silver = css`
  grid-column: 4 / 9;
  grid-row: 1;
  margin-top: 0;
`;

const Gold = css`
  grid-column: 10 / 14;
  grid-row: 1;
  margin-top: 36px;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompInfographicImage1 = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
