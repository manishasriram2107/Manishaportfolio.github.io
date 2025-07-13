import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ toggleTheme, darkMode }) => (
  <nav className="navbar">
    <h1 className="logo">Manisha M</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li>
        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "🌞" : "🌙"}
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
