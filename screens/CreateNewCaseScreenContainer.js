import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import CreateNewCaseScreen from './CreateNewCaseScreen';

class CreateNewCaseScreenContainer extends Component {

  state = {
    firstName: '',
    lastName: '',
    gender: '',
    h_color: '',
  };

  onChangeFirstNameInput = subjectValue => this.setState({ subjectValue });

  onChangeLastNameInput = messageValue => this.setState({ messageValue });

  onClickSubmit = () => {
    Alert.alert('Success', 'Your message has been sent to case owner!');
  };

  render() {
    return (
      <CreateNewCaseScreen
        firstName={this.state.firstNameValue}
        onChangeFirstNameInput={this.onChangeFirstNameInput}
        lastName={this.state.lastNameValue}
        onChangeLastNameInput={this.onChangeLastNameInput}
        onClickSubmit={this.onClickSubmit}
      />
    );
  }
}


export default CreateNewCaseScreenContainer;
