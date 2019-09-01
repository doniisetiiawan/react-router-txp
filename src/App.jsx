import React from 'react';

import {
  BrowserRouter, Link, Route, Prompt,
} from 'react-router-dom';
import ConfirmationDialog from './components/confirmation-dialog/confirmation-dialog.component';
import './App.css';

class App extends React.Component {
  state = {
    showConfirmationDialog: false,
    message: '',
    callback: null,
  };

  userConfirmationFunc = (message, callback) => {
    this.setState({
      showConfirmationDialog: true,
      message,
      callback,
    });
  };

  handleClose = (status) => {
    const { callback } = this.state;
    callback(status);
    this.setState({
      showConfirmationDialog: false,
      message: '',
      callback: null,
    });
  }

  render() {
    const { showConfirmationDialog, message } = this.state;
    return (
      <BrowserRouter
        getUserConfirmation={this.userConfirmationFunc}
      >
        <div className="container">
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/user">User</Link>
          </nav>
          <Route
            path="/dashboard"
            render={({ location }) => (
              <div>In Dashboard, Location Key:
                {location.key}
              </div>
            )}
          />
          <Route
            path="/user"
            render={({ location }) => (
              <div>
                In User, Location Key: {location.key}
                <Prompt message="This is shown in a confirmation window" />
              </div>
            )}
          />
          <ConfirmationDialog
            isOpen={showConfirmationDialog}
            message={message}
            handleClose={this.handleClose}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
