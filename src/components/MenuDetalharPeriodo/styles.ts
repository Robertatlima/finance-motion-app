import styled from "styled-components";

export const MenuDetalharContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 110px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--color-secondary);
  color: white;

  .tituloContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .formularioContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .input {
    width: 100px;
    height: 40px;
    background-color: var(--color-grey0);
    border-radius: 8px;
  }

  .formButton {
    button {
      width: 80px;
      height: 40px;
    }
  }
`;
