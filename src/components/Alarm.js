import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Alarm.module.css";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

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
export default Alarm;
