
import PropTypes from "prop-types";

function Dashboard({ todos }) {
    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;
    const pending = total - completed;

    // Calculate category stats
    const categoryStats = todos.reduce((acc, todo) => {
        const category = todo.category || "Uncategorized";
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    return (
        <div style={{
            display: "flex",
            gap: "10px",
            width: "100%",
            maxWidth: "400px",
            justifyContent: "space-between",
            flexWrap: "wrap",
        }}>
            <div style={statCardStyle}>
                <h3>{total}</h3>
                <p>Total</p>
            </div>
            <div style={{ ...statCardStyle, borderLeft: "4px solid #10b981" }}>
                <h3>{completed}</h3>
                <p>Done</p>
            </div>
            <div style={{ ...statCardStyle, borderLeft: "4px solid #f59e0b" }}>
                <h3>{pending}</h3>
                <p>Pending</p>
            </div>

            {/* Optional: Show category breakdown if there are categories */}
            {Object.keys(categoryStats).length > 0 && (
                <div style={{ ...statCardStyle, flex: "1 1 100%", textAlign: "left", marginTop: "5px" }}>
                    <strong style={{ fontSize: "0.9rem" }}>Categories:</strong>
                    <div style={{ display: "flex", gap: "5px", marginTop: "5px", flexWrap: "wrap" }}>
                        {Object.entries(categoryStats).map(([cat, count]) => (
                            <span key={cat} style={tagStyle}>
                                {cat}: {count}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

const statCardStyle = {
    background: "white",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    textAlign: "center",
    flex: "1",
    minWidth: "80px"
};

const tagStyle = {
    background: "#eef2ff",
    color: "#4f46e5",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "0.8rem"
};

Dashboard.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            completed: PropTypes.bool.isRequired,
            category: PropTypes.string,
        })
    ).isRequired,
};

export default Dashboard;
