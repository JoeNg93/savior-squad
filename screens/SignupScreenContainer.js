import React, { Component } from 'react';
import SignupScreen from './SignupScreen';
import { connect } from 'react-redux';
import { signUp } from '../actions/auth';
import { Alert } from 'react-native';
import { Icon } from 'react-native-elements';

class SignupScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Signup',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" type="font-awesome" color={tintColor} />
    ),
    headerTintColor: 'white'
  });

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    telephoneNumber: ''
  };

  onChangeEmailField = email => this.setState({ email });

  onChangePasswordField = password => this.setState({ password });

  onChangeConfirmPasswordField = confirmPassword =>
    this.setState({ confirmPassword });

  onChangeNameField = name => this.setState({ name });

  onChangeTelephoneNumberField = telephoneNumber =>
    this.setState({ telephoneNumber });

  onClickSignup = async ({
    name,
    telephoneNumber,
    email,
    password,
    confirmPassword
  }) => {
    const { status } = await this.props.signUp({
      email,
      password,
      name,
      telephoneNumber
    });
    if (status === 'success') {
      Alert.alert('Success', 'Account created! Logging in...', [
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('mainContainer')
        }
      ]);
    }
  };

  render() {
    return (
      <SignupScreen
        email={this.state.email}
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
        name={this.state.name}
        telephoneNumber={this.state.telephoneNumber}
        onChangeNameField={this.onChangeNameField}
        onChangeEmailField={this.onChangeEmailField}
        onChangePasswordField={this.onChangePasswordField}
        onChangeConfirmPasswordField={this.onChangeConfirmPasswordField}
        onChangeTelephoneNumberField={this.onChangeTelephoneNumberField}
        onClickSignup={this.onClickSignup}
        isLoggingIn={this.props.isLoggingIn}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn
});

export default connect(mapStateToProps, { signUp })(SignupScreenContainer);
