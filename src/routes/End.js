import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";

function End() {
  const { type } = useParams();
  return (
    <div>
      {type === "clear" ? <h1>GAME CLEAR!</h1> : <h1>GAME OVER</h1>}
      <Link to="/">
        <Button text="홈" />
      </Link>
      <a href="/game">
        <Button text="게임 시작" />
      </a>
    </div>
  );
}
export default End;
