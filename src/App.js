import React from 'react';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Service from './pages/service/Service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import logo from './logo.svg';
import Babylon from './components/Babylon';
import './App.css';

function App() {
  //const bab = new Babylon();
  return (
    <Router>
      <Switch>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
