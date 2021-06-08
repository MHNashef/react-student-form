import LogIn from "./components/LogIn";
import StudentPage from "./components/StudentPage";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LogIn />
        </Route>
        <Route exact path="/student-page">
          <StudentPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
