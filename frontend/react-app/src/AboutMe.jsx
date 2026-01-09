function AboutMe({ name, age, hobby }) {
  return (
   <div
  style={{
    padding: "25px",
    background: "linear-gradient(135deg, #ffe5d9, #ffc2d1)",
    borderRadius: "16px",
    width: "350px",
    margin: "30px auto",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
  }}
>

      <h2>About Me</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Favorite Hobby:</strong> {hobby}</p>
    </div>
  );
}

export default AboutMe;
