import styled from "styled-components";

export const Container = styled.div`
  color: #101010;
  background-color: var(--color-grey0);
  border-radius: 8px;
  width: 300px;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  div:nth-child(1) {
    width: 100%;
    text-align: left;
  }
  h4 {
    margin-left: 20px;
    width: 100%;
    text-align: left;
    color: var(--color-secondary);
    font-weight: 700 bold;
  }
  div {
    height: 6vh;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 10px;
  }
  .col__left div {
    display: flex;
    align-items: flex-start;
    font-weight: 600;
  }
  .col__right div {
    display: flex;
    align-items: flex-end;
    color: var(--color-grey50);
    font-size: 12px;
    font-weight: 300;
  }
  .lista__valores__Objetivo {
    display: flex;
    align-items: flex-start;
    width: 100%;
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
  }
  .progress {
    display: flex;
    justify-content: flex-start;
    padding: 20px;
  }

  .marcador__mapa {
    color: green;
    transform: rotate(180deg);
  }
  .aviso {
    font-size: 8px;
    color: var(--color-grey50);
  }
`;
