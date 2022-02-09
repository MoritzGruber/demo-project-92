import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  grid-column: 10 / 16;
  grid-row: 2;
  margin-top: 57px;
`;

const Silver = css`
  grid-row: 2;
  grid-column: 10 / 15;
  margin-top: -70px;
`;

const Gold = css`
  grid-row: 1;
  grid-column: 16 / 21;
  margin-top: 36px
`;

const Platinum = css``;

const Diamond = css``;

export const SCompInfographicImage2 = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
