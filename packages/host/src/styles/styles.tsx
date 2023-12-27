import styled from "styled-components";
import { ColProps } from "./interfaces/col.interface";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div<Partial<ColProps>>`
  padding-right: 15px;
  padding-left: 15px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ xs }: ColProps) =>
    xs &&
    `
    flex: 0 0 ${(100 / 12) * xs}%;
    max-width: ${(100 / 12) * xs}%;
  `}

  ${({ sm }: ColProps) =>
    sm &&
    `
    @media (min-width: 576px) {
      flex: 0 0 ${(100 / 12) * sm}%;
      max-width: ${(100 / 12) * sm}%;
    }
  `}

  ${({ md }: ColProps) =>
    md &&
    `
    @media (min-width: 768px) {
      flex: 0 0 ${(100 / 12) * md}%;
      max-width: ${(100 / 12) * md}%;
    }
  `}

  ${({ lg }: ColProps) =>
    lg &&
    `
    @media (min-width: 992px) {
      flex: 0 0 ${(100 / 12) * lg}%;
      max-width: ${(100 / 12) * lg}%;
    }
  `}

  ${({ xl }: ColProps) =>
    xl &&
    `
    @media (min-width: 1200px) {
      flex: 0 0 ${(100 / 12) * xl}%;
      max-width: ${(100 / 12) * xl}%;
    }
  `}
`;
