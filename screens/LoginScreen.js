import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import LoginForm from '../components/LoginForm';
import PropTypes from 'prop-types';

const LoginScreen = ({
  onPressLogin,
  email,
  password,
  onChangePasswordField,
  onChangeEmailField
}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.title}>Connecting people for better</Text>
      </View>
      <View style={styles.container}>
        <LoginForm
          email={email}
          password={password}
          onChangeEmailField={onChangeEmailField}
          onChangePasswordField={onChangePasswordField}
          onPressLogin={onPressLogin}
        />
      </View>
      <View style={styles.containerSmall}>
        <Text style={styles.title}>— or —</Text>
        <View style={styles.containerHorizontal}>
          <TouchableOpacity>
            <SocialIcon style={styles.social} button type="facebook" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SocialIcon style={styles.social} button type="twitter" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SocialIcon
              style={styles.social}
              button
              type="google-plus-official"
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

LoginScreen.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeEmailField: PropTypes.func,
  onChangePasswordField: PropTypes.func,
  onPressLogin: PropTypes.func
};

LoginScreen.defaultProps = {
  onChangeEmailField: () => {},
  onChangePasswordField: () => {},
  onPressLogin: () => {}
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#4BA2AC'
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 0.5,
    justifyContent: 'center'
  },

  logo: {
    width: 128,
    height: 128
  },

  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  },
  containerSmall: {
    flex: 1.25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  social: {
    height: 56,
    width: 56
  }
});

export default LoginScreen;
