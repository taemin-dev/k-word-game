import styles from "./Card.module.css";
import PropTypes from "prop-types";

function Card({ text, chinese }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.card__word}>{text}</h1>
      <span className={styles.card__chinese}>{chinese}</span>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  chinese: PropTypes.string,
};

export default Card;
