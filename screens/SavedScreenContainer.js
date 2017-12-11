import React, { Component } from 'react';
import SavedScreen from './SavedScreen';
import { Icon } from 'react-native-elements';

class SavedScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Saved',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTitleStyle: { color: 'white' },
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

  onPressCase = (caseId) => {

  };

  onPressEvent = (eventId) => {

  };

  cases = {
    '123': {
      name: 'Joe',
      lastKnownLoc: {
        city: 'Oulu',
        country: 'Finland'
      }
    },
    '456': {
      name: 'Dmitri',
      lastKnownLoc: {
        city: 'Stockholm',
        country: 'Sweden'
      }
    }
  };

  events = {
    "123": {
      name: 'Rescue lil Dmitri',
      loc: {
        city: 'Oulu',
        country: 'Finland'
      },
      date: '2017-12-15',
      time: '10:00'
    }
  };

  render() {
    return (
      <SavedScreen
        onPressButtonGroup={this.onPressButtonGroup}
        currentTab={this.state.currentTab}
        cases={this.cases}
        events={this.events}
        onPressCase={this.onPressCase}
        onPressEvent={this.onPressEvent}
      />
    );
  }
}

export default SavedScreenContainer;
