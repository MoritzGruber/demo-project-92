import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  background: #1d0054;
  width: 100%;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  > div:first-child {
    margin-top: 100%;
  }
  > div:last-child {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  h2,
  h4 {
    color: #ffffff;
    align-items: center;
    text-align: center;
  }
  h2 {
    padding: 0 16px;
    text-align: center;
    font-family: Open Sans;
    font-weight: 600;
    font-size: 30px;
    line-height: 46px;
    letter-spacing: 0.005em;
    color: #ffffff;
  }
  h3 {
    padding: 0 16px;
    text-align: center;
    font-family: Roboto;
    font-weight: bold;
    font-size: 12px;
    line-height: 140%;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

const Silver = css`
  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 14px;
  }
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompInfographicBubbleInner = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
