import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import styles from "./css/End.module.css";

function End() {
  const { type } = useParams();
  return (
    <div
      className={`${styles.container} ${
        type === "clear" ? styles.clearcontainer : styles.overcontainer
      }`}
    >
      {type === "clear" ? (
        <h1 className={`${styles.title} ${styles.cleartitle}`}>GAME CLEAR!</h1>
      ) : (
        <div>
          <h1 className={`${styles.title} ${styles.overtitle}`}>GAME OVER</h1>
          <span className={styles.overspan}>
            준비한 단어가 바닥났습니다 ㅠ.ㅠ
          </span>
        </div>
      )}
      <Link to="/">
        <Button
          className={styles.button}
          bgColor1={type === "clear" ? "#448aff" : "#333333"}
          bgColor2={type === "clear" ? "#b3e5fc" : "#666666"}
          text="홈"
        />
      </Link>
      <a href={`${process.env.PUBLIC_URL}/game`}>
        <Button
          className={styles.button}
          bgColor1={type === "clear" ? "#448aff" : "#333333"}
          bgColor2={type === "clear" ? "#b3e5fc" : "#666666"}
          text={type === "clear" ? "게임 시작" : "다시 도전"}
        />
      </a>
    </div>
  );
}
export default End;
