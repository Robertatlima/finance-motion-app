import profilePic from "../../assets/profile.png";
import { CabecalhoContainer } from "./styles";

const CabecalhoDashboard = ({ nomeUsuario = "Rafael" }) => {
  return (
    <CabecalhoContainer>
      <div className="userInfo">
        <img src={profilePic} alt="profilePic" />
        <div>
          <h3>Seja bem-vindo</h3>
          <h2>{nomeUsuario}</h2>
        </div>
      </div>
    </CabecalhoContainer>
  );
};
export default CabecalhoDashboard;
