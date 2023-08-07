import PropTypes from "prop-types";

function Button({
  text,
  fontSize = 24,
  textColor = "white",
  bgColor1 = "#448AFF",
  bgColor2 = "#03A9F4",
}) {
  return (
    <button
      style={{
        padding: "5px 10px",
        background: `linear-gradient(45deg, ${bgColor1}, ${bgColor2})`,
        color: textColor,
        fontSize,
        border: "none",
        borderRadius: 10,
      }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  textColor: PropTypes.string,
  bgColor1: PropTypes.string,
  bgColor2: PropTypes.string,
};

export default Button;
