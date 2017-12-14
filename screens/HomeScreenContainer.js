import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getAllCases, setSelectedCaseId } from '../actions/cases';
import { getAllEvents, setSelectedEventId } from '../actions/events';
import { getCurrentLocation } from '../actions/locations';
import { NavigationActions } from 'react-navigation';
import _ from 'lodash';
import LoadingScreen from '../components/LoadingScreen';
import { objToArrIncludingKey } from '../utils/index';
import { setCurrentDataGridView } from '../actions/system';
import geolib from 'geolib';

class HomeScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" type="font-awesome" color={tintColor} />
    ),
    headerRight: (
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Icon
          name="person-add"
          iconStyle={{ color: 'white' }}
        />
      </TouchableOpacity>
    ),
    tabBarLabel: 'Home'
  });

  componentWillMount = () => {
    this.props.getAllCases();
    this.props.getAllEvents();
    this.props.getCurrentLocation();
  };

  onClickSeeAllCases = () => {
    this.props.setCurrentDataGridView(this.casesAsArr);
    this.props.navigation.navigate('gridView');
  };

  onClickSeeAllEvents = () => {
    this.props.setCurrentDataGridView(this.eventsAsArr);
    this.props.navigation.navigate('gridView');
  };

  onClickSeeAllNearYou = () => {
    this.props.setCurrentDataGridView(this.nearestThings);
    this.props.navigation.navigate('gridView');
  };

  onClickCaseCard = selectedCase => {
    this.props.setSelectedCaseId(selectedCase.id);
    this.props.navigation.navigate('caseInfo', { tabBarLabel: 'Home' });
  };

  onClickEventCard = selectedEvent => {
    this.props.setSelectedEventId(selectedEvent.id);
    this.props.navigation.navigate('eventInfo', { tabBarLabel: 'Home' });
  };

  render() {
    const { allCases, allEvents, currentUser } = this.props;
    if (_.size(allCases) && _.size(allEvents) && currentUser.location) {
      this.casesAsArr = objToArrIncludingKey(allCases);
      this.eventsAsArr = objToArrIncludingKey(allEvents);
      this.nearestThings = _.sortBy(
        [...this.casesAsArr, ...this.eventsAsArr],
        data => {
          const { coord } = _.find(data, 'coord');
          return geolib.getDistance(currentUser.location, coord);
        }
      );
      return (
        <HomeScreen
          cases={this.casesAsArr}
          events={this.eventsAsArr}
          nearestThings={_.take(this.nearestThings, 5)}
          onClickSeeAllCases={this.onClickSeeAllCases}
          onClickSeeAllEvents={this.onClickSeeAllEvents}
          onClickSeeAllNearYou={this.onClickSeeAllNearYou}
          onClickCaseCard={this.onClickCaseCard}
          onClickEventCard={this.onClickEventCard}
        />
      );
    }
    return <LoadingScreen />;
  }
}

const mapStateToProps = state => ({
  allCases: state.cases.allCases,
  allEvents: state.events.allEvents,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, {
  getAllCases,
  getAllEvents,
  getCurrentLocation,
  setCurrentDataGridView,
  setSelectedCaseId,
  setSelectedEventId
})(HomeScreenContainer);
