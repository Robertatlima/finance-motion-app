import { useEffect, useState } from "react";
import CabecalhoDashboard from "../../components/CabecalhoDashboard";
import ExtratoDetalhado from "../../components/ExtratoDetalhado";
import ExtratoResumido from "../../components/ExtratoResumido";
import NavBar from "../../components/NavBar";
import { DashboardContainer } from "./styles";
import Objetivos from "../../components/Objetivos";
import { useLancamentos } from "../../Provider/Lancamentos";
import { useUser } from "../../Provider/UserProvider";

const Dashboard = () => {
  const [extrato, setExtrato] = useState(false);
  const { lancamentos, listarLancamentos } = useLancamentos();
  const { user } = useUser();

  useEffect(() => {
    listarLancamentos();
  }, [user]);

  console.log(lancamentos);

  return (
    <>
      <NavBar />
      <CabecalhoDashboard />
      <DashboardContainer>
        <div className="dashboardContainer">
          {extrato ? (
            <ExtratoDetalhado
              setExtrato={setExtrato}
              lancamentos={lancamentos}
            />
          ) : (
            <ExtratoResumido
              setExtrato={setExtrato}
              lancamentos={lancamentos}
            />
          )}
          <Objetivos />
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
