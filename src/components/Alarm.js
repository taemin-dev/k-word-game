import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/Alarm.module.css";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function Alarm({ text, bgColor1, bgColor2, icon }) {
  return (
    <div
      className={styles.alarm}
      style={{
        background: `linear-gradient(45deg, ${bgColor1}, ${bgColor2})`,
      }}
    >
      {icon === "check" ? (
        <FontAwesomeIcon className={styles.icon} icon={faCheck} size="2x" />
      ) : null}
      {icon === "x" ? (
        <FontAwesomeIcon className={styles.icon} icon={faX} size="2x" />
      ) : null}
      <span className={styles.text}>{text}</span>
    </div>
  );
}

Alarm.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor1: PropTypes.string.isRequired,
  bgColor2: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Alarm;
