import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import Home from "./components/Home";
import Compare from './components/Compare';
import Today from './components/Today';
import About from './components/About';
import FooterComp from './components/FooterComp';


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
      <header className="main-header">
          <HeaderComp/>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/compare" component={Compare} />
          <Route  path="/today" component={Today} />
          <Route  path="/about" component={About} />
        </Switch>
        <footer>
          <FooterComp/>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
