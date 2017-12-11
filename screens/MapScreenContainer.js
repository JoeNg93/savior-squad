import React, { Component } from 'react';
import MapScreen from './MapScreen';
import { Icon } from 'react-native-elements';
import CaseCard from '../components/CaseCard';
import EventCard from '../components/EventCard';
import { connect } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import { objToArrIncludingKey } from '../utils/index';
import _ from 'lodash';

class MapScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Map',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="globe" type="font-awesome" color={tintColor} />
    ),
    tabBarLabel: 'Map'
  });

  onSlideToCard = index => {
    this.map.animateToRegion(
      {
        ...this.markers[index],
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      },
      500
    );
  };

  onPressMarker = index => {
    this.carousel.snapToItem(index);
  };

  extractCoords = arr => arr.map(e => _.find(e, 'coord').coord);

  render() {
    const { allCases, allEvents, currentUser } = this.props;
    if (_.size(allCases) && _.size(allEvents)) {
      const casesAsArr = objToArrIncludingKey(allCases);
      const eventsAsArr = objToArrIncludingKey(allEvents);
      const nearestThings = _.sortBy([...casesAsArr, ...eventsAsArr], data => {
        const { coord } = _.find(data, 'coord');
        return geolib.getDistance(currentUser.location, coord);
      });
      this.markers = this.extractCoords(nearestThings);
      return (
        <MapScreen
          data={nearestThings}
          initialRegion={{...this.markers[1], latitudeDelta: 0.05, longitudeDelta: 0.05}}
          renderItem={({ item }) => item.age ? <CaseCard caseInfo={item} /> : <EventCard eventInfo={item}/>}
          onLoadCarousel={carousel => (this.carousel = carousel)}
          onLoadMap={map => (this.map = map)}
          onSlideToCard={this.onSlideToCard}
          onPressMarker={this.onPressMarker}
          markers={this.markers}
        />
      );
    } else {
      return <LoadingScreen />;
    }
  }
}

const mapStateToProps = state => ({
  allCases: state.cases.allCases,
  allEvents: state.events.allEvents,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, {})(MapScreenContainer);
