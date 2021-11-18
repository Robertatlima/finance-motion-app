import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { LancamentosProvider } from "./Lancamentos";
import { UserProvider } from "./UserProvider";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <LancamentosProvider>{children}</LancamentosProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};
export default Providers;
