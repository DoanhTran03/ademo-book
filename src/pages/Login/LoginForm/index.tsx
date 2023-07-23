import { AiOutlineUser } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useRef } from "react";
const LoginForm = () => {
  const { user, signIn, signUp, signOut } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signInHandle = () => {
    if (usernameRef.current && passwordRef.current) {
      signIn(usernameRef.current.value, passwordRef.current?.value);
      usernameRef.current.value = "";
    }
  };
  const signUpHandle = () => {
    if (usernameRef.current && passwordRef.current) {
      signUp(usernameRef.current.value, passwordRef.current?.value);
      passwordRef.current.value = "";
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="loginForm">
      <h1>user login</h1>
      <span className="icon">
        <AiOutlineUser />
      </span>
      <label htmlFor="username">username</label>
      <input
        ref={usernameRef}
        id="username"
        type="text"
        placeholder="eg. example@gmail.com"
      />
      <label htmlFor="password">password</label>
      <input
        ref={passwordRef}
        id="password"
        type="password"
        placeholder="password..."
      />
      <div className="buttons">
        <button className="sIBtn" onClick={() => signInHandle()}>
          signIn
        </button>
        <button className="sUBtn" onClick={() => signUpHandle()}>
          signUp
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
