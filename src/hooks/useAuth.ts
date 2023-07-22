import { useState } from "react";
import { auth } from "../config/firebase";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState<UserCredential>();

  const signUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.alert("User created successfully");
        setUser(userCredential);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  const signIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential);
        // ...
      })
      .catch((error) => {
        window.alert(error.message);
      });

    const signOut = () => {
        setUser(undefined);
    }
  };
  return {user, signIn, signUp, signOut};
};

export default useAuth;