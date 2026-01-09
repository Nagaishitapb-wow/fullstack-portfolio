
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h1>Welcome to Task Mastery</h1>
            <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "30px" }}>
                Organize your life, one task at a time.
            </p>
            <Link
                to="/todos"
                style={{
                    padding: "12px 24px",
                    backgroundColor: "#007bff",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontSize: "1.1rem"
                }}
            >
                Get Started
            </Link>
        </div>
    );
}

export default Home;
