import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Font } from 'expo';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import AppIntroScreenContainer from './screens/AppIntroScreenContainer';
import LoadingScreen from './components/LoadingScreen';
import CaseCard from './components/CaseCard';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import HomeScreenContainer from './screens/HomeScreenContainer';
import SavedScreenContainer from './screens/SavedScreenContainer';
import MapScreenContainer from './screens/MapScreenContainer';
import RandomScreenContainer from './screens/RandomScreenContainer';
import ProfileScreenContainer from './screens/ProfileScreenContainer';

const MainNavigator = TabNavigator(
  {
    homeContainer: {
      screen: StackNavigator({ home: { screen: HomeScreenContainer } })
    },
    savedContainer: {
      screen: StackNavigator({ home: { screen: SavedScreenContainer } })
    },
    mapContainer: {
      screen: StackNavigator({ map: { screen: MapScreenContainer } })
    },
    randomContainer: {
      screen: StackNavigator({ random: { screen: RandomScreenContainer } })
    },
    profileContainer: {
      screen: StackNavigator({ profile: { screen: ProfileScreenContainer } })
    }
  },
  {
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#50C9BA',
      labelStyle: { fontSize: 11 }
    },
    // For Android compatible
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false
  }
);

export default class App extends React.Component {
  state = {
    assetLoaded: false,
  };

  componentDidMount = async () => {
    await Font.loadAsync({
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-semibold': require('./assets/fonts/Raleway-SemiBold.ttf')
    });
    this.setState({ assetLoaded: true });
  };

  render() {
    if (this.state.assetLoaded) {
      return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <StatusBar barStyle='light-content'/>
            <MainNavigator />
          </View>
        </Provider>
      );
    } else {
      return <LoadingScreen />;
    }
  }
}

