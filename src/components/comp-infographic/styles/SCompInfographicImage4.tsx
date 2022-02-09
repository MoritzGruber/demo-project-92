import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
    grid-row: 4;
    grid-column: 1 / 7;
    margin-top: -35px;
`;

const Silver = css`
  grid-row: 3;
  grid-column: 1 / 7;
  margin-top: 35px;
`;

const Gold = css`
  grid-row: 3;
  grid-column: 16/ 20;
  margin-top: -3px;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompInfographicImage4 = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
