import styled from "styled-components";
import { ButtonProps } from "./button.types";

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.backgroundColor || "var(--primary-color)"};
  color: var(--text-color);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;
