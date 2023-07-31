import { useEffect, useState } from "react";
import {doc, deleteDoc, collection, getDocs, addDoc, FieldValue, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export interface Book {
  id: string
  title: string;
  author: string,
  description: string
  timeStamp: FieldValue,
  bookURL: string
}

export interface NewBook {
  title: string;
  author: string,
  description: string
  timeStamp: FieldValue,
  bookURL: string
}

const useBook = () => {
  let [books, setBooks] = useState<Book[]|NewBook[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      let list: any[] = [];
      const querySnapshot = await getDocs(collection(db, "books"));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setBooks(list);
    };
    fetchBooks();
  }, []);

  const addNewBook = async (newBook: NewBook) => {
      const oriBooks = [...books];
      try {
      await addDoc(collection(db, "books"), newBook);
      setBooks([...books, newBook]);
      }
      catch (err) {
      setBooks(oriBooks);
      }
  };

  const updateBook = async (id: string, updateBook: any) => {
    const oriBooks = [...books];
    try {
      const oldBookRef = doc(db, "books", id)
      await updateDoc(oldBookRef, updateBook);
      setBooks([...books,updateBook]);
    }
    catch(err) {
      setBooks(oriBooks);
    }
  }

  const handleDelete = async (id: string) => {
    const oriBooks = [...books];
    try{
        await deleteDoc(doc(db, "books", id));
        setBooks(books.filter(book => book.id !== id))    //this error is on purpose!
    }
    catch(err) {
        alert(err);
        setBooks(oriBooks);
    }
  }
  return {books,setBooks, addNewBook, updateBook, handleDelete}
}
export default useBook;

