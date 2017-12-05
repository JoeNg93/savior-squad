import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';
import { login, checkCredential } from '../actions/auth';

class LoginScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

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

  onPressSignup = () => {
    this.props.navigation.navigate('signup');
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <LoginScreen
        email={this.state.email}
        password={this.state.password}
        onPressLogin={this.onPressLogin}
        onChangePasswordField={this.onChangePasswordField}
        onChangeEmailField={this.onChangeEmailField}
        onPressSignup={this.onPressSignup}
      />
    );
  }
}

export default connect(null, { login, checkCredential })(LoginScreenContainer);
