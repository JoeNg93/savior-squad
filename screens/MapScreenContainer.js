import React, { Component } from 'react';
import MapScreen from './MapScreen';
import { Icon } from 'react-native-elements';

class MapScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Map',
    headerStyle: { backgroundColor: '#4BA2AC' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name='globe' type='font-awesome' color={tintColor} size={40}/>
    ),
    tabBarLabel: 'Map'
  });

  render() {
    return <MapScreen/>;
  }
}

export default MapScreenContainer;
