import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Demo from "./components/Demo";
import Description from "./components/Description";
import Navbar from "./components/CustomNavbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/demo" component={Demo} />
        <Route path="/description" component={Description} />
      </div>
    </Router>
  );
}
