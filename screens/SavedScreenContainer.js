import React, { Component } from 'react';
import SavedScreen from './SavedScreen';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { objToArrIncludingKey } from '../utils/index';
import { setSelectedEventId } from '../actions/events';
import { setSelectedCaseId } from '../actions/cases';

class SavedScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Saved',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTintColor: 'white',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="star" type="font-awesome" color={tintColor} />
    ),
    tabBarLabel: 'Saved'
  });

  state = {
    currentTab: 0
  };

  onPressButtonGroup = selectedIndex => {
    this.setState({ currentTab: selectedIndex });
  };

  onPressCase = caseId => {
    this.props.setSelectedCaseId(caseId);
    this.props.navigation.navigate('caseInfo', { tabBarLabel: 'Saved' });
  };

  onPressEvent = eventId => {
    this.props.setSelectedEventId(eventId);
    this.props.navigation.navigate('caseInfo', { tabBarLabel: 'Saved' });
  };

  render() {
    const { events, cases } = this.props.currentUser;
    return (
      <SavedScreen
        onPressButtonGroup={this.onPressButtonGroup}
        currentTab={this.state.currentTab}
        cases={objToArrIncludingKey(cases)}
        events={objToArrIncludingKey(events)}
        onPressCase={this.onPressCase}
        onPressEvent={this.onPressEvent}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, {
  setSelectedCaseId,
  setSelectedEventId
})(SavedScreenContainer);
