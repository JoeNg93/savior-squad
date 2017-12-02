import React, { Component } from 'react';
import SavedScreen from './SavedScreen';
import { Icon } from 'react-native-elements';

class SavedScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Saved',
    headerStyle: { backgroundColor: '#4BA2AC' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name='star' type='font-awesome' color={tintColor}/>
    ),
    tabBarLabel: 'Saved'
  });

  render() {
    return <SavedScreen/>;
  }
}

export default SavedScreenContainer;
