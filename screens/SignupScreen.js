import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
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
  onChangeTelephoneNumberField
}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
  onChangeTelephoneNumberField: PropTypes.func
};

SignupScreen.defaultProps = {
  onClickSignup: () => {},
  onChangeConfirmPasswordField: () => {},
  onChangeEmailField: () => {},
  onChangePasswordField: () => {},
  onChangeNameField: () => {},
  onChangeTelephoneNumberField: () => {}
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#4BA2AC'
  }
});

export default SignupScreen;
