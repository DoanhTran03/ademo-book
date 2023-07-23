import { UserCredential } from "firebase/auth"
import { createContext, useContext, useState } from "react"

interface AppContextType {
    user: UserCredential | undefined;
    setUser: React.Dispatch<React.SetStateAction<UserCredential | undefined>>;
} 
interface Props {
    children: JSX.Element;
}
const Context = createContext<AppContextType>({user: undefined, setUser: () => {}});
const AppProvider = ({children}:Props) => {
    const [user, setUser] = useState<UserCredential | undefined>(undefined);

  return (
    <Context.Provider value={{user,setUser}}>{children}</Context.Provider>
  )
}
export const useAppContext = () => {
    return useContext(Context);
}
export default AppProvider