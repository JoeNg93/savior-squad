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
import { wp, hp } from '../utils/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = ({
  onPressLogin,
  email,
  password,
  onChangePasswordField,
  onChangeEmailField,
  onPressSignup,
  isLoggingIn
}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.title}>Connecting people for better</Text>
      </View>
      <View style={[styles.container, {flex:1.75}]}>
        <LoginForm
          email={email}
          password={password}
          onChangeEmailField={onChangeEmailField}
          onChangePasswordField={onChangePasswordField}
          onPressLogin={onPressLogin}
          onPressSignup={onPressSignup}
          isLoggingIn={isLoggingIn}
        />
      </View>
      <View style={styles.container}>
          <Text style={styles.textOr}>— or —</Text>
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
    </KeyboardAwareScrollView>
  );
};

LoginScreen.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeEmailField: PropTypes.func,
  onChangePasswordField: PropTypes.func,
  onPressLogin: PropTypes.func,
  onPressSignup: PropTypes.func,
  isLoggingIn: PropTypes.bool
};

LoginScreen.defaultProps = {
  onChangeEmailField: () => {},
  onChangePasswordField: () => {},
  onPressLogin: () => {},
  onPressSignup: () => {},
  isLoggingIn: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(10),
    marginBottom: hp(5)
  },

  logo: {
    width: 128,
    height: 128,
  },

  title: {
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    // width: 160,
    // textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9
  },
  textOr: {
    color: '#2F2125',
    marginTop: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9
  },
  containerSmall: {
    // flex: 1.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(10),
  },
  containerHorizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(10),
  },
  social: {
    height: 56,
    width: 56
  }
});

export default LoginScreen;
