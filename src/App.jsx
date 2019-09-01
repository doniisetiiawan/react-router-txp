import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <BrowserRouter basename="/admin" forceRefresh>
    <div className="component">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Route
        path="/"
        render={() => <div> Inside Home </div>}
        exact
      />
      <Route
        path="/dashboard"
        render={({ location }) => <div> In Dashboard, Location Key: {location.key} </div>}
      />
    </div>
  </BrowserRouter>
);

export default App;
