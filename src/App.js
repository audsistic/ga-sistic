import React from 'react';
import './css/App.css';
import { Switch, Route } from "react-router-dom";

import CompTest from './experiments/ComponentTest';
import Home from './Home';
import NoMatch from './errors/ErrorPage';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/components" component={CompTest} />

          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
      </div>
  );
}

export default App;
