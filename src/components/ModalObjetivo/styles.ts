import styled, { keyframes } from "styled-components";
export const moveToCenter = keyframes`
0% {
    opacity: 0;
    transform: translateY(-20%)
}
100% {
    opacity: 1;
    transform: translateY(0)
}
`
export const Container = styled.div`
  width: 345px;
  max-width: 100%;
  text-align: center;
  form {
    padding: 15px 0px;
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
  
`;
