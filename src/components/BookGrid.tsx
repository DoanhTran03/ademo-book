import { useEffect, useState } from "react";
import {doc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import useBook, { Book } from "../hooks/useBook";


const BookGrid = () => {
  const {books , handleDelete} = useBook();

  console.log(books);
  return (
    <div>
      {books.map((book: Book) => (
        <>
        <p key={book.id}>{book.title}</p> 
        <button onClick={() => handleDelete(book.id)}>Delete</button>
        </>
      ))}
    </div>
  );
};

export default BookGrid;


