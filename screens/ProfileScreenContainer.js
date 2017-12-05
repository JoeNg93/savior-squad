import React, { Component } from 'react';
import ProfileScreen from './ProfileScreen';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { NavigationActions } from 'react-navigation';

class ProfileScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Profile',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTitleStyle: { color: 'white' },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="gear" type="font-awesome" color={tintColor} />
    ),
    tabBarLabel: 'Profile'
  });

  onPressLogout = async () => {
    const { status } = await this.props.logout();
    if (status === 'success') {
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [this.props.navigation.navigate('loginContainer')]
      });
    }
  };

  render() {
    return <ProfileScreen onPressLogout={this.onPressLogout} />;
  }
}

export default connect(null, { logout })(ProfileScreenContainer);
