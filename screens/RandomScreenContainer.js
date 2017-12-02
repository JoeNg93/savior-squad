import React, { Component } from 'react';
import RandomScreen from './RandomScreen';
import { Icon } from 'react-native-elements';

class RandomScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Random',
    headerStyle: { backgroundColor: '#4BA2AC' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name='wheelchair-alt' type='font-awesome' color={tintColor}/>
    ),
    tabBarLabel: 'Random'
  });

  render() {
    return <RandomScreen />;
  }
}

export default RandomScreenContainer;
