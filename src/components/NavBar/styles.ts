import styled from "styled-components";

export const NavContainer = styled.div`
  height: 58px;
  background-color: var(--color-grey0);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 15px;
  img {
    height: 36px;
  }
  .img-perfil {
    cursor: pointer;
  }
  .navContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1400px;
  }
  .navLogo {
    h2 {
      font-size: 16px;
    }
  }
`;
