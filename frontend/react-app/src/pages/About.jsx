
function About() {
    return (
        <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>About Task Mastery</h1>

            <div style={{
                background: "white",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
                    Task Mastery is a simple yet powerful todo list application designed to help you keep track of your daily tasks.
                </p>

                <h3 style={{ marginBottom: "15px", color: "#333" }}>Key Features:</h3>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
                        ✨ <strong>Fast & Intuitive:</strong> Add and remove tasks instantly.
                    </li>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
                        💾 <strong>Auto-Save:</strong> Your tasks are saved automatically to your local storage.
                    </li>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
                        ✅ <strong>Progress Tracking:</strong> Mark tasks as complete and hide them to focus on what's next.
                    </li>
                    <li style={{ padding: "10px 0" }}>
                        📱 <strong>Responsive Design:</strong> Works perfectly on desktop and mobile.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
