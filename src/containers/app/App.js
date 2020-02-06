import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IndexPage from './../indexPage/IndexPage';

import './App.css';

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage navigation="off"/>
          </Route>
          <Route exact path="/off">
            <IndexPage navigation="off"/>
          </Route>
          <Route exact path="/on">
            <IndexPage navigation="on"/>
          </Route>
        </Switch>
      </Router>
    );
}

module.exports =  App;
