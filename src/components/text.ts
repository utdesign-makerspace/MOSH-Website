import CSS from "csstype";
import styled from "styled-components";

export const MoshTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700 !important;
  font-size: 56px !important;

  background: -webkit-linear-gradient(-70deg, #db4247 0%, #a83246 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-direction-break: clone;
`;

export const MoshHeader = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700 !important;
  font-size: 48px !important;

  background: -webkit-linear-gradient(-70deg, #db4247 0%, #a83246 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-direction-break: clone;

  padding-bottom: 16px;
`;

export const MoshSubtitle = styled.p`
  font-size: clamp(16px, 2vw, 20px);
`;
