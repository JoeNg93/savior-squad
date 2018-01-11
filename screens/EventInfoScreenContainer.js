import React, { Component } from 'react';
import EventInfoScreen from './EventInfoScreen';
import { Icon } from 'react-native-elements';
// import axios from 'axios';
import { connect } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import _ from 'lodash';
import {
  joinEvent,
  leaveEvent,
  saveEvent,
  unsaveEvent
} from '../actions/events';
import { Alert, TouchableOpacity, View, Share } from 'react-native';
import {
  listenToLocationChange,
  stopListeningToLocationChange
} from '../actions/locations';
import { setSelectedCaseId } from '../actions/cases';
import { NavigationActions } from 'react-navigation';
import { getIconName } from '../utils/index';

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
    headerTitle: 'Event',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTintColor: 'white',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={getIconName(navigation.state.params.tabBarLabel)}
        type="font-awesome"
        color={tintColor}
      />
    ),
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={async () => {
            const {
              saveEvent,
              unsaveEvent,
              eventIsSaved
            } = navigation.state.params;
            if (eventIsSaved) {
              const { status } = await unsaveEvent();
              if (status === 'success') {
                Alert.alert('Success', 'Unsaved!');
                navigation.setParams({ eventIsSaved: false });
              }
            } else {
              const { status } = await saveEvent();
              if (status === 'success') {
                Alert.alert('Success', 'Saved!');
                navigation.setParams({ eventIsSaved: true });
              }
            }
          }}
        >
          <Icon
            type="font-awesome"
            name={navigation.state.params.eventIsSaved ? 'star' : 'star-o'}
            iconStyle={{
              color: navigation.state.params.eventIsSaved ? '#4BA2AC' : 'white'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => {
            const { eventInfo } = navigation.state.params;
            const { loc, name, id, date, time } = eventInfo;
            Share.share({
              title: eventInfo.name,
              message: `Hey, we're organizing an event called "${name}" for ${eventInfo
                .case[Object.keys(eventInfo.case)[0]]
                .name} at ${loc.streetAddress}, ${loc.postalCode} ${loc.city}, ${loc.country} on ${date}, starting at ${time}. Join us at https://www.savior-squad.com/events/${id}`
            });
          }}
        >
          <Icon
            type="font-awesome"
            name="share"
            iconStyle={{ color: 'white' }}
          />
        </TouchableOpacity>
      </View>
    ),
    tabBarLabel: navigation.state.params.tabBarLabel,
    tabBarOnPress: ({ jumpToIndex, scene }) => {
      jumpToIndex(scene.index);
      navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: scene.route.routes[0].routeName
            })
          ]
        })
      );
    }
  });

  componentDidMount = () => {
    const {
      navigation,
      selectedEventId,
      saveEvent,
      unsaveEvent,
      currentUser,
      allEvents
    } = this.props;
    navigation.setParams({
      saveEvent: () => saveEvent(selectedEventId),
      unsaveEvent: () => unsaveEvent(selectedEventId),
      eventIsSaved: !!(
        currentUser.events && currentUser.events[selectedEventId]
      ),
      eventInfo: { ...allEvents[selectedEventId], id: selectedEventId }
    });
  };

  onClickStartSearching = () => {
    const {
      selectedEventId,
      navigation,
      listenToLocationChange,
      allEvents,
    } = this.props;

    navigation.navigate('locationTracking', {
      eventName: allEvents[selectedEventId].name,
      tabBarLabel: navigation.state.params.tabBarLabel
    });
    // TODO: Uncomment the line below later
    listenToLocationChange(selectedEventId);
  };

  onClickCaseInfo = caseId => {
    const { navigation, setSelectedCaseId } = this.props;
    setSelectedCaseId(caseId);
    navigation.navigate('caseInfo', {
      tabBarLabel: navigation.state.params.tabBarLabel
    });
  };

  onClickParticipate = async eventId => {
    const { saveEvent, joinEvent, navigation } = this.props;
    const { status: joinStatus } = await joinEvent(eventId);
    const { status: saveStatus } = await saveEvent(eventId);
    if (joinStatus === 'success' && saveStatus === 'success') {
      Alert.alert('Success', 'Participated! Event is saved to your Saved');
      navigation.setParams({ eventIsSaved: true });
    }
  };

  onClickUnparticipate = async eventId => {
    const { allEvents, selectedEventId } = this.props;
    const { status1 } = await this.props.leaveEvent(eventId);
    const { status2 } = await this.props.stopListeningToLocationChange(eventId);

    if (status1 === 'success' && status2 === 'success') {
      Alert.alert('Success', 'Unparticipated!');
    }
  };

  render() {
    const { currentUser, selectedEventId, allEvents } = this.props;
    if (selectedEventId && currentUser) {
      const userId = currentUser.uid;
      return (
        <EventInfoScreen
          event={{ ...allEvents[selectedEventId], id: selectedEventId }}
          onGetMarkerRef={ref => (this.markerRef = ref)}
          onMapRegionChangeComplete={() => this.markerRef.showCallout()}
          onClickStartSearching={this.onClickStartSearching}
          onClickParticipate={this.onClickParticipate}
          onClickUnparticipate={this.onClickUnparticipate}
          participated={
            !!(
              allEvents[selectedEventId].participants &&
              allEvents[selectedEventId].participants[userId]
            )
          }
          onClickCaseInfo={this.onClickCaseInfo}
        />
      );
    } else {
      return <LoadingScreen />;
    }
  }
}

const mapStateToProps = state => ({
  allEvents: state.events.allEvents,
  currentUser: state.auth.currentUser,
  selectedEventId: state.events.selectedEventId
});

export default connect(mapStateToProps, {
  joinEvent,
  leaveEvent,
  listenToLocationChange,
  stopListeningToLocationChange,
  setSelectedCaseId,
  saveEvent,
  unsaveEvent
})(EventInfoScreenContainer);
