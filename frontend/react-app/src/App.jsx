import AboutMe from "./AboutMe";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My First React App </h1>

      <AboutMe 
        name="Naga Ishita" 
        age={22} 
        hobby="Travelling" 
      />
    </div>
  );
}

export default App;
