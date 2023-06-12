import "./Navigation.css";
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar">
      <nav>
        <div>
          <h1>
            <Link className="Nav-list" to="/Home">TK</Link> </h1>
        </div>
        <ul>
          <li>
            <Link className="Nav-list" to="/Booking">Booking</Link> </li>
          <li>
            <Link className="Nav-list" to="/Contact">Contact</Link> </li>
          <li>
           <Link className="Nav-list" to="/About">About</Link> </li>
          <li>
            <Link className="Nav-list" to="/Menu">Menu</Link></li>
            <li>
            <Link className="Nav-list" to="/Userinfo">User info</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
