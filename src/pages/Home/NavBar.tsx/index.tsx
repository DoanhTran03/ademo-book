import sections from "../sections";
import "../index.css";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <span
        className="cross-icon"
        onClick={() => {
          setIsCollapsed(false);
        }}
      >
        <FaBars />
      </span>
      <nav className={isCollapsed ? "nav-bar nav-bar--collapsed" : "nav-bar"}>
        <div className="nav-bar__heading">
          <h1>Ademo Book.</h1>
          <span
            className="icon"
            onClick={() => {
              setIsCollapsed(true);
            }}
          >
            <RxCross2 />
          </span>
        </div>
        <ul className="nav-bar__links">
          {sections.map((section, index) => (
            <li key={index}>
              <a href={`#${section.name}`}>
                {section.name}
                <span className="icon">
                  <section.icon />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => navigate("/inventory")}>
          <a>Explore your inventory.</a>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
