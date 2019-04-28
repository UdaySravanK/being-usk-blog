import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from './About';

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/being-usk-blog" component={Home} />
        <Route path="/being-usk-blog/about" component={About} />
      </div>
    </Router>
  );
}

export default AppRouter;