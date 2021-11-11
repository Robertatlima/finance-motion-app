import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: any;
}

const Button = ({
  secondary = false,
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <ButtonStyled
      secondary={secondary}
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
