import { useState } from "react";
import CabecalhoDashboard from "../../components/CabecalhoDashboard";
import ExtratoDetalhado from "../../components/ExtratoDetalhado";
import ExtratoResumido from "../../components/ExtratoResumido";
import NavBar from "../../components/NavBar";
import { DashboardContainer } from "./styles";
import Objetivos from "../../components/Objetivos";

const Dashboard = () => {
  const [extrato, setExtrato] = useState(false);

  return (
    <>
      <NavBar />
      <CabecalhoDashboard />
      <DashboardContainer>
        <div className="dashboardContainer">
          {extrato ? (
            <ExtratoDetalhado setExtrato={setExtrato} />
          ) : (
            <ExtratoResumido setExtrato={setExtrato} />
          )}
          <Objetivos />
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
