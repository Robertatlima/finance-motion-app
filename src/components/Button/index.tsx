import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  children: ReactNode;
  disable?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: any;
}

const Button = ({
  secondary = false,
  disable = false,
  fullWidth = false,
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <ButtonStyled
      secondary={secondary}
      type={type}
      disable={disable}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
