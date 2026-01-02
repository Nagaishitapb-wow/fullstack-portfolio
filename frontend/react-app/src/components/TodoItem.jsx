
import { memo } from "react";
import PropTypes from "prop-types";

const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
    console.log(`Rendering TodoItem: ${todo.text}`); // Proof of optimization

    return (
        <li className="todo-item">
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                    className={todo.completed ? "completed" : ""}
                    onClick={() => onToggle(todo.id)}
                >
                    {todo.text}
                </span>
                {todo.category && (
                    <span style={{ fontSize: "0.75rem", color: "#6b7280", background: "#f3f4f6", padding: "2px 6px", borderRadius: "4px", width: "fit-content" }}>
                        {todo.category}
                    </span>
                )}
            </div>

            <button
                className="delete-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(todo.id);
                }}
            >
                Delete
            </button>
        </li>
    );
});

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        category: PropTypes.string,
    }).isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
