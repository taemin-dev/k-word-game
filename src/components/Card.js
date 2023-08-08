import styles from "./Card.module.css";
import PropTypes from "prop-types";

function Card({ text, chinese, onClick, isClicked }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <h1 className={styles.card__word}>{text}</h1>
      <span
        className={
          isClicked
            ? styles.card__chinese
            : `${styles.card__chinese} ${styles.hide}`
        }
      >
        {chinese}
      </span>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  chinese: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
