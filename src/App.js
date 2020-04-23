import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import header from "./img/header.png";
import footer from "./img/footer.png";

import Home from "./pages/Home";
import Thrive from "./pages/Thrive";
import ThriveSubpage from "./pages/ThriveSubpage";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <img src={header} alt="" />
          <Link className="home" to="/">
            <span className="sr-only">Home</span>
          </Link>
          <Link className="thrive" to="/thrive">Thrive at ASU</Link>
          <Link className="thrive-subpage" to="/thrive/1">Thrive Subpage</Link>
        </header>
        <main>
          <Switch>
            <Router exact path="/thrive">
              <Thrive />
            </Router>
            <Router path="/thrive/:id">
              <ThriveSubpage />
            </Router>
            <Router path="/">
              <Home />
            </Router>
          </Switch>
        </main>
        <footer>
          <img src={footer} alt="" />
        </footer>
      </Router>
    </div>
  );
}

export default App;
