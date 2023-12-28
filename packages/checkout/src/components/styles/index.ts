import styled from "styled-components";

export const PokemonCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
  margin: 10px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PokemonImage = styled.img`
  width: 100%;
  max-width: 150px;
  margin-bottom: 10px;
`;

export const PokemonTitle = styled.h3`
  margin: 0;
  color: #333;
`;

export const StyledRemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffebee; // Um vermelho claro no hover para suavidade
  }

  & .fa-trash {
    color: #d32f2f; // Vermelho para o ícone de lixeira
  }
`;
