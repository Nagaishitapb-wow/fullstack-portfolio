import PropTypes from "prop-types";

function Card({ title, children }) {
  const cardStyle = {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "12px",
    background: "white",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Card;
