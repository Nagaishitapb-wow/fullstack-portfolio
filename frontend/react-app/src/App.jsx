import AboutMe from "./AboutMe";
import ComponentDemo from "./ComponentDemo";
import CounterApp from "./CounterApp";


function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My First React App </h1>

      <AboutMe 
        name="Naga Ishita" 
        age={22} 
        hobby="Travelling" 
      />
       <ComponentDemo /> 
        <CounterApp />
    </div>
  );
}

export default App;
