import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Font, Permissions, Asset } from 'expo';
import firebase from 'firebase';
import { View, StatusBar } from 'react-native';
import AppIntroScreenContainer from './screens/AppIntroScreenContainer';
import LoadingScreen from './components/LoadingScreen';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import HomeScreenContainer from './screens/HomeScreenContainer';
import SavedScreenContainer from './screens/SavedScreenContainer';
import MapScreenContainer from './screens/MapScreenContainer';
import RandomScreenContainer from './screens/RandomScreenContainer';
import ProfileScreenContainer from './screens/ProfileScreenContainer';
import LoginScreenContainer from './screens/LoginScreenContainer';
import SignupScreenContainer from './screens/SignupScreenContainer';
import CreateNewCaseScreenContainer from './screens/CreateNewCaseScreenContainer';
import firebaseConfig from './firebase_config';

const MainNavigator = StackNavigator(
  {
    introContainer: { screen: AppIntroScreenContainer },
    loginContainer: {
      screen: StackNavigator({
        login: { screen: LoginScreenContainer },
        signup: { screen: SignupScreenContainer }
      })
    },
    mainContainer: {
      screen: TabNavigator(
        {
          homeContainer: {
            screen: StackNavigator({ home: { screen: HomeScreenContainer } })
          },
          savedContainer: {
            screen: StackNavigator({ saved: { screen: SavedScreenContainer } })
          },
          mapContainer: {
            screen: StackNavigator({ map: { screen: MapScreenContainer } })
          },
          randomContainer: {
            screen: StackNavigator({
              random: { screen: RandomScreenContainer }
            })
          },
          profileContainer: {
            screen: StackNavigator({
              profile: { screen: ProfileScreenContainer }
            })
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
          tabBarPosition: 'bottom'
        }
      )
    }
  },
  { headerMode: 'none' }
);

export default class App extends React.Component {
  state = {
    assetLoaded: false
  };

  componentWillMount = () => {
    // Initialize Firebase
    const config = firebaseConfig;
    firebase.initializeApp(config);
  };

  componentDidMount = async () => {
    await Font.loadAsync({
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-semibold': require('./assets/fonts/Raleway-SemiBold.ttf')
    });
    await Asset.loadAsync(require('./assets/images/Background_Login_1.png'));
    await Asset.loadAsync(require('./assets/images/Background_Login_2.jpg'));
    this.setState({ assetLoaded: true });
  };

  render() {
    if (this.state.assetLoaded) {
      return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <CreateNewCaseScreenContainer/>
          </View>
        </Provider>
      );
    } else {
      return <LoadingScreen />;
    }
  }
}
