import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  grid-row: 4; 
  grid-column: 10 / 15;
  margin-top: 32px;
`;

const Silver = css`
  grid-row: 3;
  grid-column: 18 / 24;
  margin-top: 135px;
`;

const Gold = css`
  grid-row: 2;
  margin-top: -12px;
  grid-column: 6 / 10;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompInfographicImage5 = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
