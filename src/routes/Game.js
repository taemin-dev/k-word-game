import { useEffect, useState } from "react";
import Card from "../components/Card";
import wordsJson from "../words.json";
import styles from "./Game.module.css";

function Game() {
  const [words, setWords] = useState([]);
  const [round, setRound] = useState([1]);
  const { chinese, pureK } = wordsJson;
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
  const changeWords = () => {
    const newChinese = shuffle(chinese);
    const newPureK = shuffle(pureK);
    const newWords = shuffle([
      newChinese.pop(),
      newChinese.pop(),
      newChinese.pop(),
      newPureK.pop(),
    ]);
    setWords(newWords);
  };
  useEffect(() => {
    if (chinese.length > 0 && pureK.length > 0) changeWords();
  }, [round]);
  return (
    <div>
      <h1>Will be game</h1>
      {words ? (
        <div className={styles.cards}>
          {words.map((item) => {
            return (
              <Card
                key={item.word}
                text={item.word}
                chinese={item.chChar ? item.chChar : null}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
export default Game;
