import React, { Component } from 'react';
import ContactScreen from './ContactScreen';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ContactScreenContainer extends Component {
  state = {
    subjectValue: '',
    messageValue: ''
  };

  static propTypes = {
    onClickCloseContactOwner: PropTypes.func
  };

  static defaultProps = {
    onClickCloseContactOwner: () => {}
  };

  onChangeSubjectInput = subjectValue => this.setState({ subjectValue });

  onChangeMessageInput = messageValue => this.setState({ messageValue });

  onClickSubmit = () => {
    Alert.alert('Success', 'Your message has been sent to case owner!');
  };

  render() {
    const { onClickCloseContactOwner, allCases, selectedCaseId } = this.props;
    return (
      <ContactScreen
        subjectValue={this.state.subjectValue}
        onChangeSubjectInput={this.onChangeSubjectInput}
        messageValue={this.state.messageValue}
        onChangeMessageInput={this.onChangeMessageInput}
        onClickSubmit={this.onClickSubmit}
        onClickCloseContactOwner={onClickCloseContactOwner}
        caseInfo={allCases[selectedCaseId]}
      />
    );
  }
}

const mapStateToProps = state => ({
  allCases: state.cases.allCases,
  selectedCaseId: state.cases.selectedCaseId
});

export default connect(mapStateToProps, {})(ContactScreenContainer);
