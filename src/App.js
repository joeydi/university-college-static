import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Thrive from "./pages/Thrive";
import ThriveSubpage from "./pages/ThriveSubpage";

import header from "./img/header.png";
import footer from "./img/footer.png";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <header>
          <img src={header} alt="" />
          <Link className="home" to="/">
            <span className="sr-only">Home</span>
          </Link>
          <Link className="thrive" to="/thrive">
            Thrive at ASU
          </Link>
          <Link className="thrive-subpage" to="/thrive/first-year-experience">
            Thrive Subpage
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/thrive" component={Thrive} />
            <Route path="/thrive/:slug" component={ThriveSubpage} />
            <Route path="/" component={Home} />
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
