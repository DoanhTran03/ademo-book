import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const BookGrid = () => {
  let [books, setBooks] = useState([{}]);

  useEffect(() => {
    const fetchBooks = async () => {
      let list: { id: string }[] = [];
      const querySnapshot = await getDocs(collection(db, "books"));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setBooks(list);
    };
    fetchBooks();
  }, []);

  console.log(books);
  return (
    <div>
      {books.map((book) => (
        <p key={book.id}>{book.description}</p>
      ))}
    </div>
  );
};

export default BookGrid;
