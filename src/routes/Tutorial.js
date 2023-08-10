import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TutorialBox from "../components/TutorialBox";
import styles from "./css/Tutorial.module.css";
import { faHouse, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <FontAwesomeIcon className={styles.homeIcon} icon={faHouse} size="2x" />
      </Link>
      <Link to="/game">
        <FontAwesomeIcon className={styles.playIcon} icon={faPlay} size="2x" />
      </Link>

      <div className={styles.boxes}>
        <TutorialBox
          title="고유어와 한자어"
          desc="예부터 우리말에 있었거나 우리말에 기초하여 새로 만들어진 말을 '고유어'라고 한다. 그리고 한자에 기초하여 만들어진 말을 한자어라고 한다."
          page={1}
        />

        <TutorialBox
          title="게임 방식"
          desc="화면에 나온 단어 4개 중 한 개는 고유어이고, 나머지 세 개는 한자어이다. 그 중 고유어를 찾아서 클릭하는 방식이다."
          page={2}
        />

        <TutorialBox
          title="라운드"
          desc="총 5라운드까지 있으며, 단어를 한 개 맞출 때마다 다음 라운드로 올라간다. 단, 틀릴 경우 이전 라운드로 내려간다. 5번째 라운드의 문제까지 맞추면 성공이고, 단어가 다 떨어질때까지 성공하지 못하면 실패이다. (단어 총 60개)"
          page={3}
        />

        <TutorialBox
          title="참고"
          desc="모바일보다는 PC(전체화면)으로 하는 것을 적극 권장합니다. (조사 - 네이버 한자사전, 네이버 국어사전, 나무위키)"
          page={4}
        />
      </div>
    </div>
  );
}
export default Tutorial;
