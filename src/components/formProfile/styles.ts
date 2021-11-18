import styled from "styled-components";

export const Container = styled.div`
  width: 345px;
  /* padding: 0 10px; */
  text-align: center;
  form {
    border-radius: 10px;
  }
  form div {
    width: 95%;
    align-self: center;
  }
  form button {
    margin-top: 15px;
    width: 90%;
  }
  form h3 {
    padding: 15px;
    width: 100%;
    background-color: var(--color-secondary);
    color: white;
    text-align: left;
  }
`;
