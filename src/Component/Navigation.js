import "../Component/Navigation.css";
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar">
      <nav>
        <div>
          <h1>
            <Link className="Nav-list" to="/">
              TK
            </Link>{" "}
          </h1>
        </div>
        <ul>
          <li>
            <Link className="Nav-list" to="/Booking">
              Booking
            </Link>{" "}
          </li>
          <li>
            <Link className="Nav-list" to="/Contact">
              Contact
            </Link>{" "}
          </li>
          <li>
            <Link className="Nav-list" to="/About">
              About
            </Link>{" "}
          </li>
          <li>
            <Link className="Nav-list" to="/Menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="Nav-list" to="/Userinfo">
              User info
            </Link>
          </li>
          <li>
            <Link className="Nav-list" to="/Posts">
              Posts
            </Link>
          </li>
          <li>
            <Link className="Nav-list" to="/Blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="Nav-list" to="/CreateEmp">
              Employees
            </Link>{" "}
          </li>

          {/* <li>
            <Link className="Nav-list" to="/BlogDashboard">
              BlogDashboard
            </Link>{" "}
          </li>

          <li>
            <Link className="Nav-list" to="/CreateBlog">
              CreateBlog
            </Link>{" "}
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
