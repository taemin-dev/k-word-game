import { useEffect, useState } from "react";
import Card from "../components/Card";
import wordsJson from "../words.json";
import styles from "./css/Game.module.css";
import { Redirect, Link } from "react-router-dom";
import Alarm from "../components/Alarm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Game() {
  const [count, setCount] = useState(0);
  const [banned, setBanned] = useState([]);
  const [words, setWords] = useState([]);
  const [round, setRound] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [clear, setClear] = useState(false);
  const [over, setOver] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  const { chinese, pureK } = wordsJson;
  const randomChineseWord = () =>
    chinese[Math.floor(Math.random() * chinese.length)];
  const randomPureKWord = () => pureK[Math.floor(Math.random() * pureK.length)];
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
  const changeWords = () => {
    if (chinese.length + pureK.length - banned.length > 0) {
      let newChinese = [];
      let newPureK = [];
      let choose = null;

      while (newChinese.length < 3) {
        choose = randomChineseWord();
        if (!banned.includes(choose)) {
          newChinese.push(choose);
          banned.push(choose);
        }
      }

      while (newPureK.length < 1) {
        choose = randomPureKWord();
        if (!banned.includes(choose)) {
          newPureK.push(choose);
          banned.push(choose);
        }
      }

      const newWords = [...newChinese, ...newPureK];

      setWords(shuffle(newWords));

      setCount(chinese.length + pureK.length - banned.length);
    } else {
      setOver(true);
    }
  };

  useEffect(() => {
    changeWords();
  }, []);

  const roundUp = () => {
    setRound((prev) => prev + 1);
  };
  const roundDown = () => {
    setRound((prev) => prev - 1);
  };

  const clickChange = () => setClicked((prev) => !prev);
  const correctChange = () => setCorrect((prev) => !prev);
  const wrongChange = () => setWrong((prev) => !prev);
  const chineseOnClick = (event) => {
    if (!clicked) {
      clickChange();
      wrongChange();
      setTimeout(clickChange, 3000);
      setTimeout(wrongChange, 3000);
      setTimeout(changeWords, 3000);
      if (round > 1) {
        setTimeout(roundDown, 3000);
      }
    }
  };
  const pureKOnClick = () => {
    if (!clicked) {
      clickChange();
      correctChange();
      setTimeout(clickChange, 3000);
      setTimeout(correctChange, 3000);
      if (round < 5) {
        setTimeout(changeWords, 3000);
        setTimeout(roundUp, 3000);
      } else {
        const gameclear = () => setClear(true);
        setTimeout(gameclear, 3000);
      }
    }
  };

  return (
    <div className={styles.container}>
      {clear ? <Redirect to="/game/clear" /> : null}
      {over ? <Redirect to="/game/over" /> : null}
      <div className={styles.round}>
        <div
          className={`${styles.round__circle} ${
            round >= 1 ? styles.round__circle__full : ""
          }`}
        >
          1
        </div>
        <div
          className={`${styles.round__circle} ${
            round >= 2 ? styles.round__circle__full : ""
          }`}
        >
          2
        </div>
        <div
          className={`${styles.round__circle} ${
            round >= 3 ? styles.round__circle__full : ""
          }`}
        >
          3
        </div>
        <div
          className={`${styles.round__circle} ${
            round >= 4 ? styles.round__circle__full : ""
          }`}
        >
          4
        </div>
        <div
          className={`${styles.round__circle} ${
            round >= 5 ? styles.round__circle__full : ""
          }`}
        >
          5
        </div>
      </div>
      {correct ? (
        <Alarm text="정답" bgColor1="#4CAF50" bgColor2="#8BC34A" icon="check" />
      ) : null}
      {wrong ? (
        <Alarm text="오답" bgColor1="#F44336" bgColor2="#FF5722" icon="x" />
      ) : null}
      <span className={styles.count}>남은 단어 : {count}</span>
      <Link to="/">
        <FontAwesomeIcon className={styles.homeIcon} icon={faHouse} size="2x" />
      </Link>
      {words ? (
        <div className={styles.cards}>
          {words.map((item) => {
            return (
              <Card
                key={item.word}
                text={item.word}
                chinese={item.chChar ? item.chChar : null}
                onClick={item.chChar ? chineseOnClick : pureKOnClick}
                isClicked={clicked}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
export default Game;
