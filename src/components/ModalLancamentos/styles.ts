import styled from "styled-components";

export const Container = styled.div`
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
`;
