import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 345px;
  margin: 0 auto;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 30px;
    margin-bottom: 40px;
    color: var(--color-grey50);
    max-width: 340px;
    text-align: center;
  }
`;
