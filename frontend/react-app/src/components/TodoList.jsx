import { useEffect, useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  // Load todos from localStorage on mount
  useEffect(() => {
    setTimeout(() => {
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      if (savedTodos) {
        setTodos(savedTodos);
      }
      setLoading(false); // stop loading after data loads
    }, 1000); 
  }, []);

  // Save todos to localStorage 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h2>Todo List</h2>

        {/* Loading state */}
        {loading ? (
          <p className="loading-text">Loading your tasks...</p>
        ) : (
          <>
            {/* Input */}
            <div className="input-section">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task..."
              />
              <button onClick={addTask}>Add</button>
            </div>

            {/* Empty state */}
            {todos.length === 0 ? (
              <p className="empty-text">No tasks yet. Add something!</p>
            ) : (
              <ul className="todo-list">
                {todos.map((todo) => (
                  <li key={todo.id} className="todo-item">
                    <span
                      className={todo.completed ? "completed" : ""}
                      onClick={() => toggleTask(todo.id)}
                    >
                      {todo.text}
                    </span>

                    <button
                      className="delete-btn"
                      onClick={() => removeTask(todo.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default TodoList;
