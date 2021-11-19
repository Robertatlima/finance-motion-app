import styled from "styled-components";
interface ContainerProps {
  progresso: string;
}
export const Container = styled.div<ContainerProps>`
  color: #101010;
  background-color: #ffffff;
  border-radius: 8px;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1100px){
    width: 30%;
  }
  div:nth-child(1) {
    width: 100%;
    text-align: left;
  }
  h4 {
    margin-left: 20px;
    width: 100%;
    text-align: left;
    color: var(--color-secondary);
    font-weight: 700 bold;
  }
  div {
    height: 6vh;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 10px;
  }
  .col__left div {
    display: flex;
    align-items: flex-start;
    font-weight: 600;
  }
  .col__right div {
    display: flex;
    align-items: flex-end;
    color: var(--color-grey50);
    font-size: 12px;
    font-weight: 300;
  }
  .lista__valores__Objetivo {
    display: flex;
    align-items: flex-start;
    width: 100%;
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
  }
  .progress {
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    text-align: center;
    position: relative;
  }

  .marcador__map {
    color: green;
    left: ${props => props.progresso};
    transform: rotate(180deg);
    position: absolute;
    bottom: 1.4rem;

  }
  .aviso {
    font-size: 8px;
    color: var(--color-grey50);
    position: absolute;
  }
  .__aviso{
   display: flex;
   align-items: center;
   justify-content: flex-end;
   flex: 0;
   position: relative;
   bottom: -2rem;
  }
`;
