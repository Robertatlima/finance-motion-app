import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  font-size: 12px;

  max-width: 260px;
  margin-bottom: 32px;
  p {
    text-align: end;
    margin-top: 35px;
    justify-content: start;
    margin-left: 8px;
    color: var(--color-grey50);
    span {
      color: var(--color-grey100);
    }
  }
`;
