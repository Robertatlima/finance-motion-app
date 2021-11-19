import styled from "styled-components";

export const CabecalhoContainer = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, #F9B208, #F0C929, #FFE652);
  background-size:300% 300%;
  animation: motionColors 10s ease infinite;

  color: white;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  img {
    height: 80px;
  }

  .cabecalhoContainer {
    width: 100%;
    max-width: 1400px;
  }
  .userInfo {
    width: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    align-items: center;
  }
  @keyframes motionColors{
    0%{
      background-position: 0% 25%;
    }
    25%{
      background-position: 25% 0%;
    }
    50%{
      background-position: 50% 25%;
    }
    75%{
      background-position: 100% 0%;
    }
    100%{
      background-position: 0% 25%;
    }
  }
`;
