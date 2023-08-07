import Button from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>제목</h1>
      <Link to="/tutorial">
        <Button text="튜토리얼" />
      </Link>
      <Link to="/game">
        <Button text="게임 시작" />
      </Link>
    </div>
  );
}

export default Home;
