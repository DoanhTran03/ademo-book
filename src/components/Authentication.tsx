import { useRef } from "react";
import useAuth from "../hooks/useAuth";

const Authentication = () => {
  const { user, signIn, signUp } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signUpHandle = () => {
    if (emailRef.current && passwordRef.current) {
      signUp(emailRef.current.value, passwordRef.current.value);
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };
  const signInHandle = () => {
    if (emailRef.current && passwordRef.current)
      signIn(emailRef.current.value, passwordRef.current.value);
  };
  console.log(user?.user.email);
  return (
    <>
      <label>Username</label>
      <input ref={emailRef} type="email" placeholder="Email..."></input>
      <label>Password</label>
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password..."
      ></input>
      <button onClick={() => signUpHandle()}>Sign Up</button>
      <button onClick={() => signInHandle()}>Sign In</button>
      <button>Sign Out</button>
    </>
  );
};

export default Authentication;
