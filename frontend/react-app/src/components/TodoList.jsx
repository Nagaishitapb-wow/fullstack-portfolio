
import { useState, useCallback, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useToggle from "../hooks/useToggle";
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";
import Dashboard from "./Dashboard";
import "./TodoList.css";

const CATEGORIES = ["Personal", "Work", "Shopping", "Health"];

function TodoList() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Personal"); // Default category
  const [isLoading, setIsLoading] = useState(false);

  // Filter states
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const [todos, setTodos] = useLocalStorage("todos", []);
  const [showCompleted, toggleShowCompleted] = useToggle(true);

  const addTask = async () => {
    if (!task.trim()) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500)); // Shorter delay

    const newTodo = {
      id: Date.now(),
      text: task,
      category: category,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
    setIsLoading(false);
  };

  const toggleTask = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, [setTodos]);

  const removeTask = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, [setTodos]);

  // Derived state for filtered todos
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      // 1. Filter by Search
      const matchesSearch = todo.text.toLowerCase().includes(search.toLowerCase());
      // 2. Filter by Category
      const matchesCategory = filterCategory === "All" || todo.category === filterCategory;
      // 3. Filter by Status
      const matchesStatus =
        filterStatus === "All"
          ? true
          : filterStatus === "Completed"
            ? todo.completed
            : !todo.completed; // Active

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [todos, search, filterCategory, filterStatus]);

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h2>Todo List</h2>

        {/* Filters */}
        <TodoFilters
          search={search}
          setSearch={setSearch}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          categories={CATEGORIES}
        />

        {/* Input Section */}
        <div className="input-section" style={{ flexDirection: "column", alignItems: "stretch", gap: "10px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task..."
              disabled={isLoading}
              style={{ flex: 1 }}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={isLoading}
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <button onClick={addTask} disabled={isLoading} style={{ width: "100%" }}>
            {isLoading ? "Adding..." : "Add Task"}
          </button>
        </div>

        {/* Show/Hide completed button (Legacy toggle, maybe redundant with filterStatus but kept for now) */}
        <button className="toggle-btn" onClick={toggleShowCompleted} style={{ marginTop: "15px" }}>
          {showCompleted ? "Hide Completed (Legacy)" : "Show Completed (Legacy)"}
        </button>

        {/* List */}
        {filteredTodos.length === 0 && !isLoading ? (
          <p className="empty-text">No matching tasks found.</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos
              // Keep the legacy showCompleted logic for now as a double filter if user wants it
              .filter(todo => showCompleted ? true : !todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTask}
                  onDelete={removeTask}
                />
              ))}
          </ul>
        )}
      </div>

      <Dashboard todos={todos} />
    </div>
  );
}

export default TodoList;
