import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Tutorial from "./routes/Tutorial";

function App() {
  return (
    <Router>
      <Switch>
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
