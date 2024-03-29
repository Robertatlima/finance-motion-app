import Button from "../Button";
import CardExtratoResumido from "../CardExtratoResumido";
import MenuDetalharPeriodo from "../MenuDetalharPeriodo";
import { BsPlusCircle } from "react-icons/bs";
import { ExtratoDetalhadoContainer } from "./styles";
import { Dialog } from "@material-ui/core";
import { useState } from "react";
import FormLancamento from "../ModalLancamentos";
import { useLancamentos } from "../../Provider/Lancamentos";
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

interface DetalhadoProps {
  setExtrato: (value: boolean) => void;
  lancamentos: Lancamento[];
}

const ExtratoDetalhado = ({ setExtrato, lancamentos }: DetalhadoProps) => {
  const [insertModal, setInsertModal] = useState(false);
  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);

  const { busca } = useLancamentos();
  console.log("aqui vai busca", busca);

  return (
    <ExtratoDetalhadoContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MenuDetalharPeriodo />
        <br />
        <p>Movimentação</p>
        <br />
        <div className="scrollDetalhes">
          {busca.length > 0
            ? busca
                .slice(0)
                .reverse()
                .map((lancamento) => {
                  return (
                    <CardExtratoResumido
                      key={lancamento.id}
                      lancamento={lancamento}
                    />
                  );
                })
            : lancamentos
                ?.slice(0)
                .reverse()
                .map((lancamento) => {
                  return (
                    <CardExtratoResumido
                      key={lancamento.id}
                      lancamento={lancamento}
                    />
                  );
                })}
        </div>
          </motion.div>
        <button className="iconContainer" onClick={handleClickInsertModal}>
          <BsPlusCircle />
        </button>
        <Dialog open={insertModal} onClose={handleClickCloseInsertModal}>
          <FormLancamento
            handleClickCloseInsertModal={handleClickCloseInsertModal}
          />
        </Dialog>
        <Button secondary fullWidth onClick={() => setExtrato(false)}>
          Voltar
        </Button>
    </ExtratoDetalhadoContainer>
  );
};
export default ExtratoDetalhado;
