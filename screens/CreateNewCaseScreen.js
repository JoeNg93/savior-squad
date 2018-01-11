import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput
} from 'react-native';
import {
  SocialIcon,
  Avatar,
  CheckBox,
  Header,
  Icon
} from 'react-native-elements';
import LoginForm from '../components/LoginForm';
import PropTypes from 'prop-types';
import { wp, hp } from '../utils/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-material-dropdown';

class DropdownGender extends Component {
  render() {
    let data = [
      {
        value: 'Male'
      },
      {
        value: 'Female'
      }
    ];

    return <Dropdown data={data} label="Gender" />;
  }
}

class DropdownHairColor extends Component {
  render() {
    let data = [
      {
        value: 'Black'
      },
      {
        value: 'Brown'
      },
      {
        value: 'Blonde'
      },
      {
        value: 'Grey'
      },
      {
        value: 'Red'
      },
      {
        value: 'Other'
      }
    ];

    return <Dropdown data={data} label="Hair Color" />;
  }
}

const CreateNewCaseScreen = ({
  onPressLogin,
  email,
  password,
  onChangePasswordField,
  onChangeEmailField,
  onPressSignup,
  isLoggingIn,
  onClickCloseCreateNewCase
}) => {
  return (
    <KeyboardAwareScrollView
      // contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
      <Header
        leftComponent={
          <TouchableOpacity onPress={onClickCloseCreateNewCase}>
            <Icon name="close" color="white" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'Contact',
          style: { fontSize: 16, color: '#fff' }
        }}
        backgroundColor="#4BA2AC"
      />

      <ScrollView style={styles.container}>
        <View style={styles.containerHorizontal}>
          <View style={styles.logoContainer}>
            <Avatar
              style={styles.avatar}
              rounded
              title="ZK"
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value={email}
              onChangeText={onChangeEmailField}
            />
            <TextInput
              style={styles.input}
              placeholder="Second name"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value={password}
              onChangeText={onChangePasswordField}
            />
          </View>
        </View>
        <View style={styles.container}>
          <DropdownGender containerStyle={styles.dropdownContainerStyle} />
          <DropdownHairColor containerStyle={styles.dropdownContainerStyle} />
        </View>
        <View style={[styles.container, { marginTop: hp(2) }]}>
          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={password}
            onChangeText={onChangePasswordField}
          />
          <TextInput
            style={styles.input}
            placeholder="Height (cm)"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={password}
            onChangeText={onChangePasswordField}
          />
          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={password}
            onChangeText={onChangePasswordField}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.inputComments}
            placeholder="Context and comments"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            multiline
            numberOfLines={4}
            value={password}
            onChangeText={onChangePasswordField}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

CreateNewCaseScreen.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmailField: PropTypes.func,
  onChangePasswordField: PropTypes.func,
  onPressLogin: PropTypes.func,
  onPressSignup: PropTypes.func,
  isLoggingIn: PropTypes.bool,
  onClickCloseCreateNewCase: PropTypes.func
};

CreateNewCaseScreen.defaultProps = {
  onChangeEmailField: () => {},
  onChangePasswordField: () => {},
  onPressLogin: () => {},
  onPressSignup: () => {},
  onClickCloseCreateNewCase: () => {},
  isLoggingIn: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: wp(6),
    paddingRight: wp(6)
  },
  logoContainer: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(5)
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
  inputComments: {
    height: 160,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 20,
    color: '#2F2125',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#4BA2AC'
  },
  avatar: {
    height: 48,
    width: 48
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
    marginBottom: hp(10)
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(10)
  },
  buttonContainer: {
    backgroundColor: '#4BA2AC',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '400'
  },
  dropdownContainerStyle: {
    paddingLeft: wp(6),
    paddingRight: wp(6),
    width: wp(100),
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  dropdownText: {
    color: 'rgba(0, 0, 0, 0.5)'
  }
});

export default CreateNewCaseScreen;
