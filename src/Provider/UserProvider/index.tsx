import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/api";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useAuth } from "../Auth";
interface UserProps {
  children: ReactNode;
}
interface UserData {
  name: string;
  email: string;
  password: string;
  passwordConfirmed: string;
}
interface UserProviderData {
  userToken: string;
  user: UserData;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProps) => {
  const [user, setUser] = useState<UserData>({} as UserData);
  const { authToken } = useAuth();
  const [userToken, setUserToken] = useState(authToken || "");

  useEffect(() => {
      const decoder = jwtDecode<JwtPayload>(userToken);
      api
        .get(`/users/${decoder.sub}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => setUser(response.data))
        .catch(err => console.log(err))
       
  },[authToken]);
  
 
  return (
    <UserContext.Provider value={{ userToken, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
