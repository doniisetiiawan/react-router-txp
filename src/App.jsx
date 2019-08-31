import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  // refCallback = (node) => {
  //   node.onmouseover = () => {
  //     node.focus();
  //   };
  // };

  render() {
    return (
      <BrowserRouter basename="/admin">
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
  }
}

export default App;
