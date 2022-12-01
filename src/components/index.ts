import { Col, Row } from "antd";
import styled from "styled-components";

export const IndexSection = styled(Row)`
  width: 100%;
  display: grid;
  padding: var(--section-padding) 0;
  gap: 40px;
  align-items: center;

  grid-template-columns: repeat(6, 1fr);

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const IndexText = styled.div`
  grid-column: span 6;
  grid-row-end: span 2;

  @media screen and (max-width: 1025px) {
    text-align: left !important;
    order: 1;
  }
`;

export const IndexContent = styled.div`
  grid-column: span 6;
  grid-row-end: span 2;
`;
