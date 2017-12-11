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

const LoginForm = ({
  onPressLogin,
  email,
  onChangeEmailField,
  password,
  onChangePasswordField,
  onPressSignup,
  isLoggingIn
}) => {
  return (
    <View style={styles.container}>
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
        value={password}
        onChangeText={onChangePasswordField}
      />

      {isLoggingIn ? (
        <View style={styles.spinnerContainer}>
          <Spinner color="#9EE6CF" duration={300} />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onPressLogin({ email, password })}
        >
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      )}
      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>Dont have an account? </Text>
        <TouchableOpacity onPress={onPressSignup}>
          <Text style={[styles.signupText, { color: '#4BA2AC' }]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeEmailField: PropTypes.func,
  onChangePasswordField: PropTypes.func,
  onPressLogin: PropTypes.func,
  onPressSignup: PropTypes.func,
  isLoggingIn: PropTypes.bool
};

LoginForm.defaultProps = {
  onChangeEmailField: () => {},
  onChangePasswordField: () => {},
  onPressLogin: () => {},
  onPressSignup: () => {},
  isLoggingIn: false
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: wp(12),
    paddingRight: wp(12)
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 20,
    color: '#2F2125',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#4BA2AC'
  },
  buttonContainer: {
    backgroundColor: '#50C9BA',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '400'
  },
  signupTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  signupText: {
    color: '#2F2125',
    marginTop: 10,
    opacity: 0.9
  },
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginForm;
