// import AboutMe from "./AboutMe";
// import ComponentDemo from "./ComponentDemo";
// import CounterApp from "./CounterApp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoList from "./components/TodoList";
import ErrorBoundary from "./components/ErrorBoundary";
import BuggyComponent from "./components/BuggyComponent";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <ErrorBoundary>
          <Navbar />

          {/* <h1 style={{ textAlign: "center" }}>My First React App </h1>

        <AboutMe 
          name="Naga Ishita" 
          age={22} 
          hobby="Travelling" 
        />
        <ComponentDemo /> 
          <CounterApp /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/about" element={<About />} />
            <Route path="/test-error" element={<BuggyComponent />} />
          </Routes>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/test-error" style={{ color: "red", fontSize: "0.8rem" }}>Test Error Boundary</Link>
          </div>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
