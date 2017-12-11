import React, { Component } from 'react';
import EventInfoScreen from './EventInfoScreen';
import { Icon } from 'react-native-elements';
// import axios from 'axios';
import { connect } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import _ from 'lodash';
import { joinEvent, leaveEvent } from '../actions/events';
import { Alert } from 'react-native';

class EventInfoScreenContainer extends Component {
  componentWillMount = async () => {
    // const {
    //   data
    // } = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    //   params: {
    //     address: 'Hanhitie 17, Oulu, Finland',
    //     key: 'AIzaSyCQL4ib6EwQ7QuPQ8pF68zvslMsgCOmB50'
    //   }
    // });
    // console.log(data.results[0].geometry.location);
  };

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Event Title',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="wheelchair-alt" type="font-awesome" color={tintColor} />
    ),
    tabBarLabel: 'Random'
  });

  event = {
    locationName: 'Isokatu 25, 90100 Oulu, Finland',
    locationCoor: { latitude: 65.011363, longitude: 25.472509 },
    name: 'My Event',
    date: '10 Dec',
    time: '9:00 AM - 10:00 AM',
    description: 'Just play around and have fun',
    participants: {
      user1: {},
      user2: {}
    },
    case: {
      personName: 'Joe'
    }
  };

  onClickStartSearching = () =>
    this.props.navigation.navigate('locationTracking', {
      eventName: this.props.allEvents['-L-xUx5yi66djs2CKt11'].name
    });

  onClickParticipate = async eventId => {
    const { status } = await this.props.joinEvent(eventId);
    if (status === 'success') {
      Alert.alert('Success', 'Participated! Event is saved to your Saved');
    }
  };

  onClickUnparticipate = async eventId => {
    const { status } = await this.props.leaveEvent(eventId);
    if (status === 'success') {
      Alert.alert('Success', 'Unparticipated!');
    }
  };

  render() {
    const { allEvents, currentUser } = this.props;
    const eventId = '-L-xUx5yi66djs2CKt11';
    const userId = currentUser.uid;
    if (_.size(allEvents)) {
      return (
        <EventInfoScreen
          event={{
            ...allEvents[eventId],
            id: eventId
          }}
          onGetMarkerRef={ref => (this.markerRef = ref)}
          onMapRegionChangeComplete={() => this.markerRef.showCallout()}
          onClickStartSearching={this.onClickStartSearching}
          onClickParticipate={this.onClickParticipate}
          onClickUnparticipate={this.onClickUnparticipate}
          participated={
            !!(
              allEvents[eventId].participants &&
              allEvents[eventId].participants[userId]
            )
          }
        />
      );
    } else {
      return <LoadingScreen />;
    }
  }
}

const mapStateToProps = state => ({
  allEvents: state.events.allEvents,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, { joinEvent, leaveEvent })(
  EventInfoScreenContainer
);
