import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import AppProvider from "./context/AppContext";
import NavBar from "./pages/Home/NavBar.tsx";
import Hero from "./pages/Home/Hero.tsx/index.tsx";

function App() {
  return (
    // <AppProvider>
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    // </AppProvider>
    <Hero></Hero>
  );
}

export default App;
