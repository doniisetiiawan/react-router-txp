import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class UserComponent extends Component {
    state = {
      isUserLoggedIn: false,
    };

    componentWillMount = () => {
      const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
      if (isUserLoggedIn) {
        this.setState({
          isUserLoggedIn,
        });
      }
    };

    logout = (event) => {
      event.preventDefault();
      localStorage.removeItem('isUserLoggedIn');
      this.setState({
        isUserLoggedIn: false,
      });
    };

    render() {
      const { location } = this.props;
      const { isUserLoggedIn } = this.state;
      if (!isUserLoggedIn) {
        return (
          <Redirect to="/" />
        );
      }

      return (
        <div>
                Username: {location && location.state ? location.state.userName : ''} <br />
                From: {location && location.state ? location.state.from : ''} <br />
          <button type="button" onClick={this.logout}>LOGOUT</button>
        </div>
      );
    }
}

export default UserComponent;
