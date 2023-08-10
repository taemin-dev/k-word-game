import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Tutorial from "./routes/Tutorial";
import Game from "./routes/Game";
import End from "./routes/End";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/game/:type`} component={End} />
        <Route path={`${process.env.PUBLIC_URL}/game`} component={Game} />
        <Route
          path={`${process.env.PUBLIC_URL}/tutorial`}
          component={Tutorial}
        />
        <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
