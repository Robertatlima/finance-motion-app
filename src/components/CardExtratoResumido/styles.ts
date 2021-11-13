import styled, { css } from "styled-components";

interface ContainerProps {
  tipo: string;
}

export const CardExtratoResumidoContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  border-top: 1px solid var(--color-grey20);
  font-weight: bold;

  p:last-child {
    color: var(--color-grey50);
    font-weight: normal;
  }

  .innerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${(props) =>
      props.tipo === "entrada" &&
      css`
        p:last-child {
          color: var(--color-secondary);
          font-weight: bold;
        }
      `}
    ${(props) =>
      props.tipo === "saída" &&
      css`
        p:last-child {
          color: var(--color-danger);
          font-weight: bold;
        }
      `}
    ${(props) =>
      props.tipo === "objetivo" &&
      css`
        p:last-child {
          color: var(--color-primary-variable-1);
          font-weight: bold;
        }
      `}
  }
`;
