import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  grid-row: 3;
  grid-column: 2 / 6;
  margin-top: 30px;
`;

const Silver = css`
  grid-row: 2;
  grid-column: 17 / 21;
  margin-top: 42px;
`;

const Gold = css`
  grid-row: 2;
  margin-top: -55px;
  grid-column: 20 / 23;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompInfographicImage3 = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
