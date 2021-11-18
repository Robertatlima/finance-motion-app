import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 2rem auto;
  align-items: center;
  grid-gap: 1rem;
  p {
    font-size: 12px;
    text-align: end;
    color: var(--color-grey50);
    span {
      display: block;
      color: var(--color-grey100);
    }
  }
`;
