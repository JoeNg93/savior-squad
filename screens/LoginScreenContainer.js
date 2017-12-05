import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';
import { login, checkCredential } from '../actions/auth';

class LoginScreenContainer extends Component {
  state = {
    email: '',
    password: ''
  };

  onChangeEmailField = email => this.setState({ email });

  onChangePasswordField = password => this.setState({ password });

  onPressLogin = async ({ email, password }) => {
    const { status } = await this.props.login({ email, password });
    if (status === 'success') {
      this.props.navigation.navigate('mainContainer');
    }
  };


  render() {
    return (
      <LoginScreen
        email={this.state.email}
        password={this.state.password}
        onPressLogin={this.onPressLogin}
        onChangePasswordField={this.onChangePasswordField}
        onChangeEmailField={this.onChangeEmailField}
      />
    );
  }
}

export default connect(null, { login, checkCredential })(LoginScreenContainer);
