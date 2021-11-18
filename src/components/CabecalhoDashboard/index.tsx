import profilePic from "../../assets/profile.png";
import { useUser } from "../../Provider/UserProvider";
import { CabecalhoContainer } from "./styles";

const CabecalhoDashboard = () => {
  const { user } = useUser();

  return (
    <CabecalhoContainer>
      <div className="userInfo">
        <img src={profilePic} alt="profilePic" />
        <div>
          <h3>Seja bem-vindo</h3>
          <h2>{user.name}</h2>
        </div>
      </div>
    </CabecalhoContainer>
  );
};
export default CabecalhoDashboard;
