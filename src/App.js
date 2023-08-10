import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Tutorial from "./routes/Tutorial";
import Game from "./routes/Game";
import End from "./routes/End";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/game/:type" component={End} />
        <Route path="/game" component={Game} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
