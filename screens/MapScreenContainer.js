import React, { Component } from 'react';
import MapScreen from './MapScreen';
import { Icon } from 'react-native-elements';

class MapScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Map',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name='globe' type='font-awesome' color={tintColor} />
    ),
    tabBarLabel: 'Map'
  });

  render() {
    return <MapScreen/>;
  }
}

export default MapScreenContainer;
