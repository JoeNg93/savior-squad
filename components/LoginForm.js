import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';

const LoginForm = ({
  onPressLogin,
  email,
  onChangeEmailField,
  password,
  onChangePasswordField,
  onPressSignup
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="rgba(255,255,255,0.7)"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={onChangeEmailField}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        secureTextEntry
        value={password}
        onChangeText={onChangePasswordField}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => onPressLogin({ email, password })}
      >
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>Dont have an account? </Text>
        <TouchableOpacity onPress={onPressSignup}>
          <Text style={[styles.signupText, { color: 'rgba(0,0,255,0.4)' }]}>
            Sign up
          </Text>
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
  onPressSignup: PropTypes.func
};

LoginForm.defaultProps = {
  onChangeEmailField: () => {},
  onChangePasswordField: () => {},
  onPressLogin: () => {},
  onPressSignup: () => {}
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#439098',
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
    alignItems: 'center'
  },
  signupText: {
    color: '#FFF',
    marginTop: 10,
    opacity: 0.9
  }
});

export default LoginForm;
