import { useLancamentos } from "../../Provider/Lancamentos";
import Button from "../Button";
import CardExtratoResumido from "../CardExtratoResumido";
import CardSaldoGeral from "../CardSaldoGeral";
import { ExtratoResumidoContainer } from "./styles";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { motion } from "framer-motion";

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

interface ResumidodoProps {
  setExtrato: (value: boolean) => void;
  lancamentos: Lancamento[];
}

const ExtratoResumido = ({ setExtrato, lancamentos }: ResumidodoProps) => {
  const entradas = lancamentos
    .filter((lancamento) => {
      return lancamento.tipo === "entrada";
    })
    .reduce(function (acc, obj) {
      return acc + obj.valor;
    }, 0);
  const saidas = lancamentos
    .filter((lancamento) => {
      return lancamento.tipo === "saída";
    })
    .reduce(function (acc, obj) {
      return acc + obj.valor;
    }, 0);
  const objetivos = lancamentos
    .filter((lancamento) => {
      return lancamento.tipo === "objetivo";
    })
    .reduce(function (acc, obj) {
      return acc + obj.valor;
    }, 0);
  const saldoGeral = entradas - saidas - objetivos;

  useEffect(() => {
    if (saldoGeral <= 0) {
      toast.error("Saldo negativo :(");
    }
  }, [saldoGeral]);

  return (
    <ExtratoResumidoContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardSaldoGeral saldoGeral={saldoGeral} />
        <br />
        <p>Movimentação</p>
        <br />
        {lancamentos && (
          <>
            <CardExtratoResumido
              lancamento={lancamentos[lancamentos.length - 1]}
            />
            <CardExtratoResumido
              lancamento={lancamentos[lancamentos.length - 2]}
            />
            <CardExtratoResumido
              lancamento={lancamentos[lancamentos.length - 3]}
            />
          </>
        )}

        <Button secondary fullWidth onClick={() => setExtrato(true)}>
          Detalhar
        </Button>
      </motion.div>
    </ExtratoResumidoContainer>
  );
};
export default ExtratoResumido;
