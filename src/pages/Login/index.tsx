import video from "../../assets/pexels-cottonbro-studio-4860897-1366x720-25fps.mp4"
const Login = () => {
  return (
    <div className="login">
      <video className="video" autoPlay loop muted>
        <source src={video}/>
      </video>
    </div>
  )
}

export default Login