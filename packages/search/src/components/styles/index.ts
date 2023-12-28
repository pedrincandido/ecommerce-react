import styled from "styled-components";

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
