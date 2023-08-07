import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Tutorial from "./routes/Tutorial";
import Game from "./routes/Game";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/tutorial">
          <Tutorial />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
