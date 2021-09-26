import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Notfound from "./components/notfound";
// after imports

function App() {
  return (
    <Router>
      <Header />
      {/* this is the header section */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
