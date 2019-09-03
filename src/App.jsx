import React from 'react';

import { Route, Switch } from 'react-router-dom';
import './App.css';
import Counter from './components/counter.component';

const App = () => (
  <div>
    <Counter />
    <Switch>
      <Route path="/counter" component={Counter} />
    </Switch>
  </div>
);

export default App;
