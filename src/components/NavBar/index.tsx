import Logo from "../logo";
import profilePic from "../../assets/profile.png";
import { NavContainer } from "./styles";

const NavBar = () => {
  return (
    <NavContainer>
      <div className="navLogo">
        <Logo />
      </div>
      <img src={profilePic} alt="perfil" />
    </NavContainer>
  );
};
export default NavBar;
