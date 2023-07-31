import {createContext, useContext } from "react";
import useBook, { Book, NewBook } from "../hooks/useBook";

interface Props {
    children: JSX.Element;
}
interface ContextType {
    books: Book[] | NewBook[];
    addNewBook: (newBook: NewBook) => void;
    handleDelete: (id: string) => void;
    setBooks: React.Dispatch<React.SetStateAction<Book[] | NewBook[]>>;
}
const Context = createContext<ContextType>({books: [], addNewBook: () => {}, handleDelete: () => {}, setBooks: () => {}});

const InventoryProvider = ({children} : Props) => {
    const {books, addNewBook, handleDelete, setBooks} = useBook();   

  return (
    <Context.Provider value={{
      books, addNewBook,handleDelete,setBooks
    }}>
      {children}
    </Context.Provider>
  )
}

export const useInventoryContext = () => {
    return useContext(Context);
}

export default InventoryProvider;