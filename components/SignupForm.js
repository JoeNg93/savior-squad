import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import { wp, hp } from '../utils/index';
import { Spinner } from 'nachos-ui';

const SignupForm = ({
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
    <View >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={name}
          onChangeText={onChangeNameField}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={onChangeEmailField}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          secureTextEntry
          onChangeText={onChangePasswordField}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          secureTextEntry
          onChangeText={onChangeConfirmPasswordField}
        />
        <TextInput
          style={styles.input}
          placeholder="Tel. Number"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={telephoneNumber}
          onChangeText={onChangeTelephoneNumberField}
        />
      </View>

      <View style={styles.container}>
        {isLoggingIn ? (
          <View style={styles.spinnerContainer}>
            <Spinner color="#9EE6CF" duration={300} />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              onClickSignup({
                email,
                password,
                confirmPassword,
                name,
                telephoneNumber
              })}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

SignupForm.propTypes = {
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

SignupForm.defaultProps = {
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
    marginTop: hp(8),
    justifyContent: 'center',
    paddingLeft: wp(12),
    paddingRight: wp(12),
    width: wp(100),
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginBottom: 20,
    color: '#2F2125',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#4BA2AC'
  },
  buttonContainer: {
    backgroundColor: 'rgba(80,201,186, 0.6)',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '400'
  },
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SignupForm;
