import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import AppProvider from "./context/AppContext";
import NavBar from "./pages/Home/NavBar.tsx";
import Hero from "./pages/Home/Hero.tsx/index.tsx";
import Home from "./pages/Home/index.tsx";
import HotProduct from "./pages/Home/HotProduct.tsx/index.tsx";
import BookCard from "./pages/Home/HotProduct.tsx/BookCard.tsx/index.tsx";
import AutoSlider from "./pages/Home/HotProduct.tsx/AutoSlider/index.tsx";
import New from "./components/New.tsx";
import BookGrid from "./components/BookGrid.tsx";

function App() {
  return (
    // <AppProvider>
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    // </AppProvider>
    <BookGrid></BookGrid>
  );
}

export default App;
