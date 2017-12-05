import React, { Component } from 'react';
import MapScreen from './MapScreen';
import { Icon } from 'react-native-elements';
import CaseCard from '../components/CaseCard';

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

  state = {
    markers: [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817
        },
        title: 'Best Place',
        description: 'This is the best place in Portland'
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507
        },
        title: 'Second Best Place',
        description: 'This is the second best place in Portland'
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034
        },
        title: 'Third Best Place',
        description: 'This is the third best place in Portland'
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917
        },
        title: 'Fourth Best Place',
        description: 'This is the fourth best place in Portland'
      }
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068
    }
  };

  items = [0, 1, 2, 3];

  onSlideToCard = (index) => {
    this.map.animateToRegion({
      ...this.state.markers[index].coordinate,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02
    }, 200);
  };

  onPressMarker = (index) => {
    this.carousel.snapToItem(index);
  };

  render() {
    return (
      <MapScreen
        items={this.items}
        data={this.state}
        initialRegion={this.state.region}
        renderItem={({ item }) => <CaseCard caseInfo={{}} />}
        onLoadCarousel={carousel => this.carousel = carousel }
        onLoadMap={map => this.map = map }
        onSlideToCard={this.onSlideToCard}
        onPressMarker={this.onPressMarker}
      />
    );
  }
}

export default MapScreenContainer;
