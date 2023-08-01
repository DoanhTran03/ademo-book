import Home from "./Home";
import Inventory from "./Inventory";
import Login from "./Login";

const pageData = [
    {
        path: "/",
        element: Login,
        title: "login"
    },
    {
        path: "/home",
        element: Home,
        title: "home"
    },
    {
        path: "/inventory",
        element: Inventory,
        title: "inventory"
    },
]
export default pageData;