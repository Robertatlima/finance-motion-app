import styled from "styled-components";
import svgCabecalhoObjetivo from "../../assets/svgCabecalhoObjetivo.svg";

export const Container = styled.div`
  color: #101010;
  background-color: var(--color-primary);
  border-radius: 8px;
  width: 300px;
  padding: 20px;
  height: 94px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div{
      display: flex;
      justify-content: space-between;
      flex: 1;
      align-items: center;
    
  }
  div:nth-child(2){
      font-size: 40px;
  }

`