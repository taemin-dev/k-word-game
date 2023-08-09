import Button from "../components/Button";
import { Link } from "react-router-dom";
import styles from "./css/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>고유어를 찾아라!</h1>
      <Link to="/tutorial">
        <Button className={styles.button} text="게임 설명" />
      </Link>
      <a href="/game">
        <Button className={styles.button} text="게임 시작" />
      </a>
    </div>
  );
}

export default Home;
