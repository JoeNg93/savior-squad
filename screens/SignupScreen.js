import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import SignupForm from '../components/SignupForm';
import PropTypes from 'prop-types';

const SignupScreen = ({
  email,
  password,
  confirmPassword,
  name,
  telephoneNumber,
  onClickSignup,
  onChangeEmailField,
  onChangePasswordField,
  onChangeConfirmPasswordField,
  onChangeNameField,
  onChangeTelephoneNumberField,
  isLoggingIn
}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../assets/images/Background_Login_2.jpg')}
        resizeMode="cover"
      />
      <SignupForm
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        name={name}
        telephoneNumber={telephoneNumber}
        onChangePasswordField={onChangePasswordField}
        onChangeEmailField={onChangeEmailField}
        onChangeConfirmPasswordField={onChangeConfirmPasswordField}
        onChangeNameField={onChangeNameField}
        onChangeTelephoneNumberField={onChangeTelephoneNumberField}
        onClickSignup={onClickSignup}
        isLoggingIn={isLoggingIn}
      />
    </KeyboardAvoidingView>
  );
};

SignupScreen.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  telephoneNumber: PropTypes.string.isRequired,
  onClickSignup: PropTypes.func,
  onChangeEmailField: PropTypes.func,
  onChangePasswordField: PropTypes.func,
  onChangeConfirmPasswordField: PropTypes.func,
  onChangeNameField: PropTypes.func,
  onChangeTelephoneNumberField: PropTypes.func,
  isLoggingIn: PropTypes.bool
};

SignupScreen.defaultProps = {
  onClickSignup: () => {},
  onChangeConfirmPasswordField: () => {},
  onChangeEmailField: () => {},
  onChangePasswordField: () => {},
  onChangeNameField: () => {},
  onChangeTelephoneNumberField: () => {},
  isLoggingIn: false
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#4BA2AC'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -10,
    width: null,
    height: null
  }
});

export default SignupScreen;
