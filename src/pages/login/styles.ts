import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px){
    width: 100%;
    margin: auto;
    padding: 0 15px;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
