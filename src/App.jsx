import React from 'react';
import { Route } from 'react-router-dom';
import HomeComponent from './components/home/home.component';
import DashboardComponent from './components/dashboard/dashboard.component';
import './App.css';

function App() {
  return (
    <div className="container">
      <Route
        path="/"
        component={HomeComponent}
        exact
      />
      <Route
        path="/dashboard/"
        component={DashboardComponent}
        strict
      />
      <Route
        path="/Dashboard"
        component={DashboardComponent}
        sensitive
      />
      <Route
        path="/dashboard"
        component={DashboardComponent}
        sensitive
      />
      <Route
        path="/user"
        render={() => (
          <div> Inside User Route </div>
        )}
      />
      <Route
        path="/sidenav"
        children={() => (
          <div> Inside Sidenav route </div>
        )}
      />
      <Route
        path="/user"
        render={({ match }) => {
          console.log(match);
          return (
            <div> Inside User route </div>
          );
        }}
      />
      <Route
        path="/sidenav"
        children={({ match }) => {
          console.log(match)
          return (
            <div> Inside Sidenav route </div>
          );
        }}
      />
    </div>
  );
}

export default App;
