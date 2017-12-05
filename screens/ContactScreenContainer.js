import React, { Component } from 'react';
import ContactScreen from './ContactScreen';
import { Alert } from 'react-native';

class ContactScreenContainer extends Component {
  state = {
    subjectValue: '',
    messageValue: ''
  };

  onChangeSubjectInput = subjectValue => this.setState({ subjectValue });

  onChangeMessageInput = messageValue => this.setState({ messageValue });

  onClickSubmit = () => {
    Alert.alert('Success', 'Your message has been sent to case owner!');
  };

  render() {
    return (
      <ContactScreen
        subjectValue={this.state.subjectValue}
        onChangeSubjectInput={this.onChangeSubjectInput}
        messageValue={this.state.messageValue}
        onChangeMessageInput={this.onChangeMessageInput}
        onClickSubmit={this.onClickSubmit}
      />
    );
  }
}

export default ContactScreenContainer;
