import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import Home from "./components/Home";
import Compare from "./components/Compare";
import Today from "./components/Today";
import About from "./components/About";
import FooterComp from "./components/FooterComp";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <header className="desktop-header">
          <HeaderComp />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/compare" component={Compare} />
          <Route path="/today" component={Today} />
          <Route path="/about" component={About} />
        </Switch>
        <footer>
          <FooterComp />
          <MobileNavBar className="mobile-nav" />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
