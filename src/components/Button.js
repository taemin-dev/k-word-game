import PropTypes from "prop-types";
import styles from "./css/Button.module.css";

function Button({
  className,
  text,
  fontSize = 24,
  textColor = "white",
  bgColor1 = "#448aff",
  bgColor2 = "#b3e5fc",
}) {
  return (
    <button
      className={`${styles.button} ${className}`}
      style={{
        padding: "5px 10px",
        background: `linear-gradient(45deg, ${bgColor1}, ${bgColor2})`,
        color: textColor,
        fontSize,
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
