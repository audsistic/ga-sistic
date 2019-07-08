import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CompTest from './experiments/ComponentTest';

import './App.css';

import Button from '@material-ui/core/Button';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </header>
        <Route exact path="/components" component={CompTest} />
      </div>
    </Router>
  );
}

export default App;
