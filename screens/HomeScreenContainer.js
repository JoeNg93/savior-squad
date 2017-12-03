import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

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

  render() {
    return <HomeScreen />;
  }
}

export default HomeScreenContainer;
