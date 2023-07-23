import { UserCredential } from "firebase/auth"
import { createContext, useContext, useState } from "react"

interface AppContextType {
    curUser: UserCredential | undefined;
    setCurUser: React.Dispatch<React.SetStateAction<UserCredential | undefined>>;
} 
interface Props {
    children: JSX.Element;
}
const Context = createContext<AppContextType>({curUser: undefined, setCurUser: () => {}});
const AppProvider = ({children}:Props) => {
    const [curUser, setCurUser] = useState<UserCredential | undefined>(undefined);

  return (
    <Context.Provider value={{curUser,setCurUser}}>{children}</Context.Provider>
  )
}
export const useAppContext = () => {
    return useContext(Context);
}
export default AppProvider