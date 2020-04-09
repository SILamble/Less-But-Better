import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Current from "./components/pages/Current";
import Completed from "./components/pages/Completed";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Current} />
        <Route exact path="/current" component={Current} />
        <Route exact path="/completed" component={Completed} />
      </div>
    </Router>
  );
}

export default App;