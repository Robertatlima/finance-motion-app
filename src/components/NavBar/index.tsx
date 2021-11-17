import Logo from "../logo";
import profilePic from "../../assets/profile.png";
import { NavContainer } from "./styles";
import { useState } from "react";
import { useAuth } from "../../Provider/Auth";
import { Dialog, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router";
import FormProfile from "../formProfile";

const NavBar = () => {
  const history = useHistory();
  const [insertModal, setInsertModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { deslogar } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleShowMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);
  return (
    <NavContainer>
      <div className="navContainer">
        <div className="navLogo">
          <Logo />
        </div>
        <div>
          <img
            src={profilePic}
            alt="perfil"
            className="img-perfil"
            onClick={handleShowMenu}
          />
          <div className="menu-profile">
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem>Ajuda</MenuItem>
              <MenuItem onClick={handleClickInsertModal}>
                Editar Perfil
              </MenuItem>
              <MenuItem onClick={() => deslogar(history)}>Deslogar</MenuItem>
            </Menu>
          </div>
          <Dialog
            // fullScreen={fullScreen}
            open={insertModal}
            onClose={handleClickCloseInsertModal}
            aria-labelledby="responsive-dialog-title"
          >
            <FormProfile
              handleClickCloseInsertModal={handleClickCloseInsertModal}
            />
          </Dialog>
        </div>
      </div>
    </NavContainer>
  );
};
export default NavBar;
