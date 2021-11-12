import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  font-size: 12px;
  max-width: 260px;
  margin-bottom: 32px;
  img {
    width: 85px;
    height: 70px;
  }
  p {
    margin-left: 8px;

    color: var(--color-grey50);
    span {
      color: var(--color-grey100);
    }
  }
`;
