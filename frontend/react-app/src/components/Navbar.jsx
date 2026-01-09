
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // We'll create this for some basic styling

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="nav-brand">Todo App</div>
            <div className="nav-links">
                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                    Home
                </Link>
                <Link to="/todos" className={`nav-link ${location.pathname === "/todos" ? "active" : ""}`}>
                    Todos
                </Link>
                <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
                    About
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
