import { useEffect, useState } from "react";
import Card from "../components/Card";
import wordsJson from "../words.json";
import styles from "./Game.module.css";
import { Redirect } from "react-router-dom";

function Game() {
  const [words, setWords] = useState([]);
  const [round, setRound] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [clear, setClear] = useState(false);
  const [over, setOver] = useState(false);

  const { chinese, pureK } = wordsJson;
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
  const changeWords = () => {
    if (chinese.length > 0 && pureK.length > 0) {
      const newChinese = shuffle(chinese);
      const newPureK = shuffle(pureK);
      const newWords = shuffle([
        newChinese.pop(),
        newChinese.pop(),
        newChinese.pop(),
        newPureK.pop(),
      ]);
      setWords(newWords);
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
  const chineseOnClick = (event) => {
    if (!clicked) {
      clickChange();
      setTimeout(clickChange, 3000);
      setTimeout(changeWords, 3000);
      if (round > 1) {
        setTimeout(roundDown, 3000);
      }
    }
  };
  const pureKOnClick = () => {
    if (!clicked) {
      clickChange();
      setTimeout(clickChange, 3000);
      setTimeout(changeWords, 3000);
      if (round < 5) {
        setTimeout(roundUp, 3000);
      } else {
        const gameclear = () => setClear(true);
        setTimeout(gameclear, 3000);
      }
    }
  };

  return (
    <div>
      {clear ? <Redirect to="/game/clear" /> : null}
      {over ? <Redirect to="/game/over" /> : null}
      <h2>Round: {round}</h2>
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
