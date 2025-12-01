import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useToggle from "../hooks/useToggle";
import "./TodoList.css";

function TodoList() {
  const [task, setTask] = useState("");

  // Custom hook replaces useState + localStorage useEffect
  const [todos, setTodos] = useLocalStorage("todos", []);

  // For show/ hide completed todos
  const [showCompleted, toggleShowCompleted] = useToggle(true);

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

        {/* Show/Hide completed button */}
        <button className="toggle-btn" onClick={toggleShowCompleted}>
          {showCompleted ? "Hide Completed" : "Show Completed"}
        </button>

        {/* Empty state */}
        {todos.length === 0 ? (
          <p className="empty-text">No tasks yet. Add something!</p>
        ) : (
          <ul className="todo-list">
            {todos
              .filter((todo) =>
                showCompleted ? true : !todo.completed
              )
              .map((todo) => (
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
      </div>
    </div>
  );
}

export default TodoList;
