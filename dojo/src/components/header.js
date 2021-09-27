import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div id="container">
      <div className="div1">
        
        <h2 className="logo">WE-CO</h2>
    <p className="tagline">Landscaping Services</p>
      </div>
      <div className="div2">
        <Link className="links" to="/">home</Link>
        <Link className="links" to="/about">about</Link>
        <Link className="links" to="/contact">contact</Link>
      </div>
    </div>
  );
};

export default Header;
