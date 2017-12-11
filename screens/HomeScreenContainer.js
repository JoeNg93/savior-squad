import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getAllCases } from '../actions/cases';
import { getAllEvents } from '../actions/events';
import { getCurrentLocation } from '../actions/locations';
import _ from 'lodash';
import LoadingScreen from '../components/LoadingScreen';
import { objToArrIncludingKey } from '../utils/index';
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
          type="font-awesome"
          name="user-plus"
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

  render() {
    const { allCases, allEvents, currentUser } = this.props;
    if (_.size(allCases) && _.size(allEvents) && currentUser.location) {
      const casesAsArr = objToArrIncludingKey(allCases);
      const eventsAsArr = objToArrIncludingKey(allEvents);
      const nearestThings = _.sortBy([...casesAsArr, ...eventsAsArr], data => {
        const { coord } = _.find(data, 'coord');
        return geolib.getDistance(currentUser.location, coord);
      });
      return (
        <HomeScreen
          cases={casesAsArr}
          events={eventsAsArr}
          nearestThings={_.take(nearestThings, 5)}
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
  getCurrentLocation
})(HomeScreenContainer);
