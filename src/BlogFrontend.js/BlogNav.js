import { Link } from "react-router-dom"
import "../Component/Navigation.css"

function Navigation() {
    return (
        <header className="navigation">
            <nav className="nav">
                <Link to='/blog' className="logo-blog">
                    My Blog
                </Link>
                <ul>
                    <li className="list">
                        <Link className="nav-link">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;