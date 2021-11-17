import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: var(--color-grey0);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .dashboardContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1400px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .dashboardContainer {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: flex-start;
    }
  } ;
`;
