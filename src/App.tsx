import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./pages/Router";
import AppProvider from "./context/AppContext";

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
