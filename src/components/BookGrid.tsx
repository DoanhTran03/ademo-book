import { useEffect, useState } from "react";
import {doc, deleteDoc, collection, getDocs } from "firebase/firestore";
import useBook, { Book, NewBook } from "../hooks/useBook";


const BookGrid = () => {
  const {books , handleDelete} = useBook();

  console.log(books);
  return (
    <div>
      {books.map((book: Book | NewBook) => (
        <>
        <p key={book.id}>{book.title}</p> 
        <button onClick={() => handleDelete(book.id)}>Delete</button>
        </>
      ))}
    </div>
  );
};

export default BookGrid;


