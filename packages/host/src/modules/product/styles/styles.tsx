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

export const StyledButton = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:active {
    background-color: #3e8e41;
    transform: scale(0.98);
  }

  &:hover {
    background-color: #367c39;
  }
`;


export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`;


export const Card = styled.div`
  flex: 1;
  min-width: 280px; // Largura mínima para responsividade
  max-width: 350px; // Largura máxima para que não fiquem muito largos
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Isso garante que o botão fique no rodapé
  height: 100%;
`;

export const CardContent = styled.div`
  padding: 1em;
`;

export const CardFooter = styled.div`
  padding: 1em;
  display: flex;
  justify-content: flex-end;
`;
