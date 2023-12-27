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

  ${({ xs }: Partial<ColProps>) =>
    xs &&
    `
    flex: 0 0 ${(100 / 12) * xs}%;
    max-width: ${(100 / 12) * xs}%;
  `}

  ${({ sm }: Partial<ColProps>) =>
    sm &&
    `
    @media (min-width: 576px) {
      flex: 0 0 ${(100 / 12) * sm}%;
      max-width: ${(100 / 12) * sm}%;
    }
  `}

  ${({ md }: Partial<ColProps>) =>
    md &&
    `
    @media (min-width: 768px) {
      flex: 0 0 ${(100 / 12) * md}%;
      max-width: ${(100 / 12) * md}%;
    }
  `}

  ${({ lg }: Partial<ColProps>) =>
    lg &&
    `
    @media (min-width: 992px) {
      flex: 0 0 ${(100 / 12) * lg}%;
      max-width: ${(100 / 12) * lg}%;
    }
  `}

  ${({ xl }: Partial<ColProps>) =>
    xl &&
    `
    @media (min-width: 1200px) {
      flex: 0 0 ${(100 / 12) * xl}%;
      max-width: ${(100 / 12) * xl}%;
    }
  `}
`;


export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const StyledCardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const StyledCardTitle = styled.h5`
  margin-bottom: 0.75rem;
`;

export const StyledCardText = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`;



export const CardImage = styled.img`
  max-height: 200px;
  object-fit: contain;
  width: auto;
  height: auto;
`;
