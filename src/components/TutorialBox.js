import PropTypes from "prop-types";
import styles from "./css/TutorialBox.module.css";

function TutorialBox({ title, desc, page }) {
  return (
    <div className={styles.tutorialBox}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <small className={styles.page}>{page}</small>
    </div>
  );
}

TutorialBox.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default TutorialBox;
