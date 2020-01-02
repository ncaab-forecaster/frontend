import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Switch>
          <Route to="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
