import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  grid-column: 1 / 9;
  grid-row: 2;
  margin-top: 11px;
`;

const Silver = css`
  grid-column: 8 / 18;
  grid-row: 3;
  margin-top: -45px;
`;

const Gold = css`
  grid-column: 11 / 19;
  grid-row: 2;
  margin-top: -180px;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompInfographicBubble2 = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
