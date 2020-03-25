import React from 'react';
import Home from './pages/home/Home';
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
        <Route path="/about">
          about
        </Route>
        <Route path="/topics">
          topics
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
