import {AiOutlineUser} from "react-icons/ai"
const LoginForm = () => {
  return (
    <form className='loginForm'>
        <h1>user login</h1>
        <span className="icon"><AiOutlineUser/></span>
        <label htmlFor="username">username</label>
        <input id="username" type="text"  placeholder='eg. example@gmail.com'/>
        <label htmlFor="password">password</label>
        <input id='password' type="text" placeholder="password..."/>
        <div className="buttons">
            <button className="sIBtn">signIn</button>
            <button className="sUBtn">signUp</button>
        </div>
    </form>
  )
}

export default LoginForm