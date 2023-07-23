import video from "../../assets/pexels-cottonbro-studio-4860897-1366x720-25fps.mp4"
import LoginForm from "./LoginForm"
import {TbBook} from "react-icons/tb"
import "./index.css"
import animate from "./animation"
import { useEffect } from "react"
const Login = () => {
  window.addEventListener('load',animate);
  return (
    <div className="login">
      <video className="video" autoPlay loop muted>
        <source src={video}/>
      </video>
      <LoginForm></LoginForm>
    <div className="login__header">
        <h1>Ademo Book.</h1>
        <p className="introduction">Mange your inventory for futher exploration</p>
        <div className="center-line"></div>
        <span className="icon"><TbBook/></span>
        <p className="slogan">Fast, Format and Forward.</p>
    </div>
    </div>
  )
}

export default Login