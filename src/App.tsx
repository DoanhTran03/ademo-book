import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import AppProvider from "./context/AppContext";
import NavBar from "./pages/Home/NavBar.tsx";
import Hero from "./pages/Home/Hero.tsx/index.tsx";
import Home from "./pages/Home/index.tsx";
import HotProduct from "./pages/Home/HotProduct.tsx/index.tsx";

function App() {
  return (
    // <AppProvider>
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    // </AppProvider>
    <HotProduct></HotProduct>
  );
}

export default App;
