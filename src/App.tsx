import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import AppProvider from "./context/AppContext";
import NavBar from "./pages/Home/NavBar.tsx";

function App() {
  return (
    // <AppProvider>
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    // </AppProvider>
    <NavBar></NavBar>
  );
}

export default App;
