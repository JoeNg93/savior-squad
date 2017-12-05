import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';

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
  onChangeTelephoneNumberField
}) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="rgba(255,255,255,0.7)"
          value={name}
          onChangeText={onChangeNameField}
        />
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
          onChangeText={onChangePasswordField}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          onChangeText={onChangeConfirmPasswordField}
        />
        <TextInput
          style={styles.input}
          placeholder="Tel. Number"
          placeholderTextColor="rgba(255,255,255,0.7)"
          value={telephoneNumber}
          onChangeText={onChangeTelephoneNumberField}
        />
      </View>

      <View style={styles.container}>
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
  onChangeTelephoneNumberField: PropTypes.func
};

SignupForm.defaultProps = {
  onClickSignup: () => {},
  onChangeConfirmPasswordField: () => {},
  onChangeEmailField: () => {},
  onChangePasswordField: () => {},
  onChangeNameField: () => {},
  onChangeTelephoneNumberField: () => {}
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
  }
});

export default SignupForm;
