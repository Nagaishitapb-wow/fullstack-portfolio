import PropTypes from "prop-types";

function Header({ title, subtitle }) {
  return (
    <header style={{ textAlign: "center", margin: "20px 0" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>{title}</h1>
      {subtitle && (
        <p style={{ fontSize: "1rem", color: "#555" }}>{subtitle}</p>
      )}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Header;
