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
      max-width: 974px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;
