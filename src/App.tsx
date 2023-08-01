import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import AppProvider from "./context/AppContext";
import NavBar from "./pages/Home/NavBar.tsx";
import Home from "./pages/Home/index.tsx";
import HotProduct from "./pages/Home/HotProduct.tsx/index.tsx";
import BookCard from "./pages/Home/HotProduct.tsx/BookCard.tsx/index.tsx";
import AutoSlider from "./pages/Home/HotProduct.tsx/AutoSlider/index.tsx";
import New from "./components/New.tsx";
import Inventory from "./pages/Inventory/index.tsx";
import ManageArea from "./pages/Inventory/ManageArea/index.tsx";
import "./pages/Inventory/index.css"
import BookGrid from "./pages/Inventory/BookGrid/index.tsx";
import Modal from "./pages/Inventory/BookGrid/Modal.tsx/index.tsx";
import About from "./pages/Home/About/index.tsx";
import PersonCard from "./pages/Home/About/PersonCard/index.tsx";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
