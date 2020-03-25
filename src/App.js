import React from 'react';

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
      <div className="App">
        App2 
      </div>
      <Switch>
        <Route path="/about">
          about
        </Route>
        <Route path="/topics">
          topics
        </Route>
        <Route path="/">
          home
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
