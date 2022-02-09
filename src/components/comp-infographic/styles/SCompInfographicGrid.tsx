import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: auto auto auto auto; 
  gap: 0px 10px; 
  grid-template-areas: 
    ". . . . . . . . . . . . . . ."
    ". . . . . . . . . . . . . . ."
    ". . . . . . . . . . . . . . ."
    ". . . . . . . . . . . . . . ."; 
`;

const Silver = css`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: auto auto auto; 
  grid-template-areas: 
    ". . . . . . . . . . . . . . . . . . . . . . ."
    ". . . . . . . . . . . . . . . . . . . . . . ."
    ". . . . . . . . . . . . . . . . . . . . . . ."
    ". . . . . . . . . . . . . . . . . . . . . . ."; 
`;

const Gold = css`
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: auto auto auto; 
  grid-template-areas: 
    ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
    ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
    ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
    ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."; 
`;

const Platinum = css``;

const Diamond = css``;

export const SCompInfographicGrid = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
