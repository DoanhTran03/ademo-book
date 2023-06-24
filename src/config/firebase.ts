// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPxaTvZcjT-qFhBmjJpYrjf48hC0i995A",
  authDomain: "book-inventory-b2046.firebaseapp.com",
  projectId: "book-inventory-b2046",
  storageBucket: "book-inventory-b2046.appspot.com",
  messagingSenderId: "1031225059255",
  appId: "1:1031225059255:web:ee91c70270089ead006a32",
  measurementId: "G-YE8MSX088B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
export const db = getFirestore(app);
export const storage = getStorage(app);


