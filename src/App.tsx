import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import AppProvider from "./context/AppContext";
import "./pages/Inventory/index.css"

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
