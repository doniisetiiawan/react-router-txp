import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';

import './App.css';
import Counter from './components/counter.component';
import Dashboard from './components/dashboard.component';

const NavBar = () => (
  <nav>
    <Link
      to={{
        pathname: '/dashboard',
        search: 'q=1',
        hash: 'test',
        state: { key: 'value ' },
      }}
    >
      Dashboard
    </Link>
  </nav>
);

const App = () => (
  <div>
    <NavBar />
    <Counter />
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default App;
