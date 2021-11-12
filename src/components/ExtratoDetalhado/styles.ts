import styled from "styled-components";

export const ExtratoDetalhadoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 345px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  margin-top: -90px;

  .iconContainer {
    background-color: transparent;
    align-self: center;
    border: none;
    width: 50px;
    height: 50px;
    font-size: 50px;
    color: var(--color-grey50);
    margin: 50px 0;
  }
`;
