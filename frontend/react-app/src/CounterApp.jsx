import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [customValue, setCustomValue] = useState("");

  // Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const applyCustomValue = () => {
    if (customValue === "" || isNaN(customValue)) return;
    setCount(Number(customValue));
    setCustomValue("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Interactive Counter App</h1>

      <div style={styles.counterBox}>
        <h2 style={styles.count}>{count}</h2>

        <div style={styles.btnRow}>
          <button style={styles.btn} onClick={decrement}>-</button>
          <button style={styles.btn} onClick={increment}>+</button>
        </div>

        <button style={styles.resetBtn} onClick={reset}>Reset</button>

        {/* Controlled Input Field */}
        <div style={styles.inputBox}>
          <input
            type="number"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            placeholder="Set custom value"
            style={styles.input}
          />
          <button style={styles.setBtn} onClick={applyCustomValue}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

// Inline CSS 
const styles = {
  container: {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#f2f2f2",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  counterBox: {
    background: "#b5d4f7ff",
    width: "350px",
    margin: "0 auto",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  count: {
    fontSize: "48px",
    margin: "10px 0",
  },
  btnRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "15px",
  },
  btn: {
    padding: "10px 20px",
    fontSize: "20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  resetBtn: {
    padding: "10px 20px",
    marginTop: "10px",
    background: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  inputBox: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  input: {
    padding: "8px",
    width: "120px",
    borderRadius: "6px",
  },
  setBtn: {
    background: "#4c8bfa",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
