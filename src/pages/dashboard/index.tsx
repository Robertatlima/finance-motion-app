
import { useState } from "react";
import CabecalhoDashboard from "../../components/CabecalhoDashboard";
import ExtratoDetalhado from "../../components/ExtratoDetalhado";
import ExtratoResumido from "../../components/ExtratoResumido";
import NavBar from "../../components/NavBar";
import { DashboardContainer } from "./styles";

const Dashboard = () => {
  const [extrato, setExtrato] = useState(false);

  return (
    <>
      <NavBar />
      <DashboardContainer>
        <CabecalhoDashboard />
        {extrato ? (
          <ExtratoDetalhado setExtrato={setExtrato} />
        ) : (
          <ExtratoResumido setExtrato={setExtrato} />
        )}
      </DashboardContainer>
    </>
  );
};

export default Dashboard;