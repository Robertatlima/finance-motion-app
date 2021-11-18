import styled from "styled-components";

export const CabecalhoContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: var(--color-primary-variable-1);
  color: white;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  img {
    height: 80px;
  }

  .cabecalhoContainer {
    width: 100%;
    max-width: 1400px;
  }
  .userInfo {
    width: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    align-items: center;
  }
`;
