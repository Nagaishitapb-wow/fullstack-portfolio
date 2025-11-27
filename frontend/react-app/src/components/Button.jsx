import PropTypes from "prop-types";

function Button({ label, onClick, type = "primary" }) {
  const styles = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    margin: "5px",
    background:
      type === "primary" ? "#4f46e5" : type === "secondary" ? "#6b7280" : "#14b8a6",
    color: "white",
  };

  return (
    <button style={styles} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary", "success"]),
};

export default Button;
