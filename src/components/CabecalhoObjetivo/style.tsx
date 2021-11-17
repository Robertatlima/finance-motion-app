import styled from "styled-components";
import svgCabecalhoObjetivo from "../../assets/svgCabecalhoObjetivo.svg";

export const Container = styled.div`
  color: #101010;
  border-radius: 8px;
  width: 100%;
  max-width: 345px;
  padding: 20px;
  height: 94px;
  margin-bottom: 10px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-primary);
  background-image: url(${svgCabecalhoObjetivo});
  background-repeat: no-repeat, repeat;
  background-size: 100% 100%;
  .cabecalhoObjetivos {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
  }
  div:nth-child(2) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    max-width: 974px;
  }
`;
