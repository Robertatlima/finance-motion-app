import styled, { css } from "styled-components";

interface ButtonStyledProps {
  disable: boolean;
  secondary: boolean;
  fullWidth: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  outline: none;
  cursor: pointer;
  width: 130px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: white;
  &:hover {
    background-color: var(--color-primary-variable-1);
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: var(--color-secondary);
      color: white;
      &:hover {
        background-color: var(--color-secondary-variable-1);
      }
    `}
  ${(props) =>
    props.disable &&
    css`
      background-color: var(--color-grey0);
      color: var(--color-grey50);
      &:hover {
        background-color: var(--color-grey20);
      }
    `}
    ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
