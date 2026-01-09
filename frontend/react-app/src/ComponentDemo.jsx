import Header from "./components/Header";
import Button from "./components/Button";
import Card from "./components/Card";

function ComponentDemo() {
  return (
    <div style={{ padding: "30px" }}>
      <Header 
        title="My Component Library"
        subtitle="Reusable React components with Props + PropTypes"
      />

      <Card title="Profile Card">
        <p>Hello, I'm Ishita </p>
        <Button 
          label="Say Hello" 
          type="primary"
          onClick={() => alert("Hello Ishita!")}
        />
      </Card>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Button Variations</h2>
        <Button label="Primary" type="primary" />
        <Button label="Secondary" type="secondary" />
        <Button label="Success" type="success" />
      </div>
    </div>
  );
}

export default ComponentDemo;
