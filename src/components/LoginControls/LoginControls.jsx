import React from 'react';
import AuthService from '../authorisation/AuthService';

const authenticationService = new AuthService();

class LoginControls extends React.Component {
  handleLoginClick() {
    authenticationService.login();
  }

  handleLogoutClick() {
    authenticationService.logout();
  }

  render() {
    return (
      <React.Fragment>
        <button id="login-button" onClick={this.handleLoginClick}>
          Login
        </button>
        <button id="logout-button" onClick={this.handleLogoutClick}>
          Logout
        </button>
      </React.Fragment>
    );
  }
}

export default LoginControls;