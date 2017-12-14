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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
      <Image
        style={styles.backgroundImage}
        source={require('../assets/images/Background_Login_1.png')}
        resizeMode="cover"
      />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.title}>Dont let the loved ones wait</Text>
      </View>
      <View>
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
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: wp(6),
    paddingRight: wp(6)
  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(10),
    marginBottom: hp(5)
  },

  logo: {
    marginLeft: hp(10),
    marginRight: hp(10),
    width: 164,
    height: 164
  },

  title: {
    color: '#fffae4',
    marginTop: 10,
    marginBottom: 10,
    // width: 160,
    // textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
    fontSize: 20
  },
  textOr: {
    color: '#fffae4',
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9
  },
  containerHorizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(4)
  },
  social: {
    height: 56,
    width: 56
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

export default LoginScreen;
