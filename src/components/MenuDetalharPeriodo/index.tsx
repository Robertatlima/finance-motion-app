import { TextField, MenuItem } from "@material-ui/core";
import { useState } from "react";
import Button from "../Button";
import { MenuDetalharContainer } from "./styles";
import CardExtratoResumido from "../CardExtratoResumido/index";
import { number } from "yup";
import { useLancamentos } from "../../Provider/Lancamentos";

interface Lancamento {
  id: string;
  nome: string;
  mes: number;
  dia: number;
  ano: number;
  valor: number;
  categoria: string;
  progresso: number;
  tipo: string;
  userId: string;
}

interface ObjLancamento {
  lancamento: Lancamento;
}

const meses = [
  { id: 1, valor: 1 },
  { id: 2, valor: 2 },
  { id: 3, valor: 3 },
  { id: 4, valor: 4 },
  { id: 5, valor: 5 },
  { id: 6, valor: 6 },
  { id: 7, valor: 7 },
  { id: 8, valor: 8 },
  { id: 9, valor: 9 },
  { id: 10, valor: 10 },
  { id: 11, valor: 11 },
  { id: 12, valor: 12 },
];

const dias = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
interface filtroMes {
  id: number;
  valor: string;
}

const MenuDetalharPeriodo = () => {
  const { lancamentos, setBusca } = useLancamentos();
  const [mes, setMes] = useState(0);
  const [dia, setDia] = useState(1);

  const handleMes = (event: any) => {
    setMes(event.target.value);
    console.log(event.target.value);
  };

  const handleDia = (event: any) => {
    setDia(event.target.value);
  };

  const handleForm = () => {
    const filtroMes = lancamentos.filter((el) => el?.mes === mes);
    setBusca(filtroMes);
    setMes(0);
    console.log(filtroMes);
  };

  return (
    <MenuDetalharContainer>
      <div className="tituloContainer">
        <p>Detalhar Extrato</p>
        <p>2021</p>
      </div>
      <form className="formularioContainer">
        <div className="input">
          <TextField
            fullWidth
            select
            value={mes}
            onChange={handleMes}
            variant="outlined"
            id="mes"
            label="Mes"
            size="small"
            color="success"
          >
            {meses.map((mes) => (
              <MenuItem key={mes.id} value={mes.valor}>
                {mes.valor}
              </MenuItem>
            ))}
          </TextField>
        </div>

        {/* <div className="input">
          <TextField
            fullWidth
            select
            value={dia}
            onChange={handleDia}
            variant="outlined"
            id="dia"
            label="Dia"
            size="small"
            color="success"
          >
            {dias.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div> */}
        <div className="formButton">
          <Button onClick={handleForm}>Buscar</Button>
        </div>
      </form>
    </MenuDetalharContainer>
  );
};
export default MenuDetalharPeriodo;
