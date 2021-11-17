import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { UserProvider } from "./UserProvider";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </>
  );
};
export default Providers;
