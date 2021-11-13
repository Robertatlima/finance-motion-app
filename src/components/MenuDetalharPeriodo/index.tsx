import { TextField, MenuItem } from "@material-ui/core";
import { useState } from "react";
import Button from "../Button";
import { MenuDetalharContainer } from "./styles";

const meses = [
  { id: 1, valor: "Janeiro" },
  { id: 2, valor: "Fevereiro" },
  { id: 3, valor: "Março" },
  { id: 4, valor: "Abril" },
  { id: 5, valor: "Maio" },
  { id: 6, valor: "Junho" },
  { id: 7, valor: "Julho" },
  { id: 8, valor: "Agosto" },
  { id: 9, valor: "Setembro" },
  { id: 10, valor: "Outubro" },
  { id: 11, valor: "Novembro" },
  { id: 12, valor: "Dezembro" },
];

const dias = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const MenuDetalharPeriodo = () => {
  const [mes, setMes] = useState("Janeiro");
  const [dia, setDia] = useState(1);

  const handleMes = (event: any) => {
    setMes(event.target.valor);
  };

  const handleDia = (event: any) => {
    setDia(event.target.valor);
  };

  const handleForm = () => {
    // LÓGICA DE FILTRAGEM PELO MES E/OU DIA
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
            // value={mes}
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

        <div className="input">
          <TextField
            fullWidth
            select
            // value={dia}
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
        </div>
        <div className="formButton">
          <Button onClick={handleForm}>Buscar</Button>
        </div>
      </form>
    </MenuDetalharContainer>
  );
};
export default MenuDetalharPeriodo;
