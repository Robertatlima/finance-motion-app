import Logo from "../logo";
import profilePic from "../../assets/profile.png";
import { NavContainer } from "./styles";

const NavBar = () => {
  return (
    <NavContainer>
      <div className="navContainer">
        <div className="navLogo">
          <Logo />
        </div>
        <img src={profilePic} alt="perfil" />
      </div>
    </NavContainer>
  );
};
export default NavBar;
