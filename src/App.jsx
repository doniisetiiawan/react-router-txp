import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <BrowserRouter keyLength={10}>
    <div className="container">
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/user">User</Link>
      </nav>
      <Route
        path="/dashboard"
        render={({ location }) => <div> In Dashboard, Location Key: {location.key} </div>}
      />
      <Route
        path="/user"
        render={({ location }) => <div> In User, Location Key: {location.key} </div>}
      />
    </div>
  </BrowserRouter>
);

export default App;
