import About from "./About/index.tsx"
import Hero from "./Hero.tsx/index.tsx"
import HotProduct from "./HotProduct.tsx/index.tsx"
import NavBar from "./NavBar.tsx"

const Home = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="hotProduct-container">
        <HotProduct></HotProduct>
      </div>
      <About></About>
    </div>
  )
}

export default Home