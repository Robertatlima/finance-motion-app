import styled from "styled-components";

export const CabecalhoContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: var(--color-primary-variable-1);
  color: white;
  padding: 15px;
  img {
    height: 80px;
  }
  .userInfo {
    width: 246px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;