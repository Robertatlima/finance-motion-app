import styled, { css } from "styled-components";

interface ContainerProps {
  tipo: string;
}

export const Container = styled.div<ContainerProps>`
  width: 345px;
  max-width: 100%;
  text-align: center;
  form {
    margin: 0 10px;
  }
  .modal {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-secondary);
    h2 {
      color: #ffff;
      font-size: 18px;
      margin-left: 10px;
    }
    button {
      background-color: var(--color-secondary);
      border: none;
      color: var(--color-grey20);
      font-size: 20px;
      margin-right: 10px;
    }
  }
  form button {
    margin-top: 15px;
  }

  p:first-child {
    font-weight: bold;
  }

  .headContainer,
  .bodyContainer {
    padding: 25px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .headContainer {
    button {
      background-color: transparent;
      color: var(--color-grey50);
      border: none;
      font-size: 30px;
      cursor: pointer;
    }

    ${(props) =>
      props.tipo === "entrada" &&
      css`
        p:first-child {
          color: var(--color-secondary);
          font-weight: bold;
        }
      `}
    ${(props) =>
      props.tipo === "saída" &&
      css`
        p:first-child {
          color: var(--color-danger);
          font-weight: bold;
        }
      `}
      ${(props) =>
      props.tipo === "objetivo" &&
      css`
        p:first-child {
          color: var(--color-primary-variable-1);
          font-weight: bold;
        }
      `}
  }
`;
