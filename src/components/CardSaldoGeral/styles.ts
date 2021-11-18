import styled from "styled-components";

export const CardSaldoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 108px;
  border-radius: 5px;
  padding: 0 20px;
  background-color: var(--color-secondary);
  color: white;

  .infoContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80px;
    border-bottom: 3px solid var(--color-primary);
  }

  .iconContainer {
    width: 35px;
    height: 35px;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 35px;
    cursor: pointer;
  }
`;
