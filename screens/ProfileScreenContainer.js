import React, { Component } from 'react';
import ProfileScreen from './ProfileScreen';
import { Icon } from 'react-native-elements';

class ProfileScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Profile',
    headerStyle: { backgroundColor: '#4BA2AC' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name='gear' type='font-awesome' color={tintColor}/>
    ),
    tabBarLabel: 'Profile'
  });

  render() {
    return <ProfileScreen />;
  }
}

export default ProfileScreenContainer;
