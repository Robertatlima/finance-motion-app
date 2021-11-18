import styled from "styled-components";

export const ObjetivosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;

  .containerObjetivos {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .containerObjetivos {
      width: 350px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media (min-width: 900px) {
    .containerObjetivos {
      width: 500px;
    }
  }

  @media (min-width: 1000px) {
    .containerObjetivos {
      width: 600px;
    }
  }
  @media (min-width: 1100px) {
    .containerObjetivos {
      width: 750px;
    }
  }
  @media (min-width: 1300px) {
    .containerObjetivos {
      width: 974px;
    }
  }
`;
