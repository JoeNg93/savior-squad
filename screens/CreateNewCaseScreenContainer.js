import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import CreateNewCaseScreen from './CreateNewCaseScreen';
import PropTypes from 'prop-types';

class CreateNewCaseScreenContainer extends Component {

  state = {
    firstName: '',
    lastName: '',
    gender: '',
    h_color: '',
  };

  static propTypes = {
    onClickCloseCreateNewCase: PropTypes.func
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
        onClickCloseCreateNewCase={this.props.onClickCloseCreateNewCase}
      />
    );
  }
}


export default CreateNewCaseScreenContainer;
