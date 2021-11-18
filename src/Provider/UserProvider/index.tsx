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
import { toast } from "react-toastify";

interface UserProps {
  children: ReactNode;
}
interface UserData {
  name: string;
  email: string;
  password: string;
  passwordConfirmed: string;
  id: number;
}
interface UserProviderData {
  userToken: string;
  user: UserData;
  editProfile: (data: any) => void;
  insertModal: boolean;
  handleClickInsertModal: () => void;
  handleClickCloseInsertModal: () => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProps) => {
  const [user, setUser] = useState<UserData>({} as UserData);
  const { authToken } = useAuth();
  const [userToken, setUserToken] = useState(authToken || "");

  const [insertModal, setInsertModal] = useState(false);
  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);

  const editProfile = (data: any) => {
    const decoder = jwtDecode<JwtPayload>(userToken);
    api
      .patch(`/users/${decoder.sub}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        toast.success("Dados alterados com sucesso");
        setInsertModal(false);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (userToken) {
      const decoder = jwtDecode<JwtPayload>(userToken);
      api
        .get(`/users/${decoder.sub}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })


        .then((response) => setUser(response.data))
        .catch(err => console.log(err))
       
      }
  },[])
   

  
  return (
    <UserContext.Provider
      value={{
        userToken,
        user,
        editProfile,
        insertModal,
        handleClickInsertModal,
        handleClickCloseInsertModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
