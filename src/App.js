import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";

import "./css/navigation.css";
import "./css/taskStyles.css";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <SideBar /> */}
      <div className="mainContent">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
