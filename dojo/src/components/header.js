import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div id="container">
      <div className="div1">hello</div>
      <div className="div2">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
};

export default Header;
