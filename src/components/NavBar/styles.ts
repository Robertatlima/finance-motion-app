import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 58px;
  background-color: var(--color-grey0);
  padding: 0 15px;
  img {
    height: 36px;
  }
  .navLogo {
    h2 {
      font-size: 16px;
    }
  }
`;
