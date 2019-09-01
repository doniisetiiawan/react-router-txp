import React from 'react';
import {
  BrowserRouter, Link, Route, Prompt,
} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  userConfirmationFunc = (message, callback) => {
    const status = window.confirm(message);
    callback(status);
  }

  render() {
    return (
      <BrowserRouter getUserConfirmation={this.userConfirmationFunc}>
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
            render={({ location }) => (
              <div> In User, Location Key: {location.key}
                <Prompt message="This is shown in a confirmation window" />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
