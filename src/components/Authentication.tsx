import { useState } from "react";
import { auth } from "../config/firebase";
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

const Authentication = () => {
  const [user, setUser] = useState<UserCredential>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      window.alert("User created successfully");
      setUser(userCredential);
    })
    .catch(error => {window.alert(error.message)})
  };

  const signOut = async () => {

  }

  const signIn = async () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setUser(userCredential);
    // ...
  })
  .catch((error) => {
    window.alert(error.message)
  });
  }

  return <>
  <p>Current User: {auth.currentUser?.email} <br /> Login Successfully!!!</p>
  <label>Username</label>
  <input type="email" placeholder="Email..." onChange={e => setEmail(e.target.value)}></input>
  <label>Password</label>
  <input type="password" placeholder="Password..." onChange={e => {setPassword(e.target.value)}}></input>
  <button onClick={signUp}>Sign Up</button>
  <button onClick={signIn}>Sign In</button>
  <button >Sign Out</button>
  </>;
};

export default Authentication;
