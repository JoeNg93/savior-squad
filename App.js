import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Font, Permissions, Asset } from 'expo';
import firebase from 'firebase';
import { View, StatusBar } from 'react-native';
import AppIntroScreenContainer from './screens/AppIntroScreenContainer';
import LoadingScreen from './components/LoadingScreen';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import HomeScreenContainer from './screens/HomeScreenContainer';
import SavedScreenContainer from './screens/SavedScreenContainer';
import MapScreenContainer from './screens/MapScreenContainer';
import RandomScreenContainer from './screens/RandomScreenContainer';
import ProfileScreenContainer from './screens/ProfileScreenContainer';
import LoginScreenContainer from './screens/LoginScreenContainer';
import SignupScreenContainer from './screens/SignupScreenContainer';
import firebaseConfig from './firebase_config';
import LocationTrackingScreenContainer from './screens/LocationTrackingScreenContainer';
import ContactScreenContainer from './screens/ContactScreenContainer';
import CaseInfoPage from './components/CaseInfo';
import CreateEventPage from './screens/CreateEventScreen';
import EventInfoScreenContainer from './screens/EventInfoScreenContainer';
import LoginScreen from './screens/LoginScreen';
import GridViewScreenContainer from './screens/GridViewScreenContainer';
import CaseScreenContainer from './screens/CaseScreenContainer';
import CreateNewCaseScreenContainer from './screens/CreateNewCaseScreenContainer';

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
            screen: StackNavigator({
              home: { screen: HomeScreenContainer },
              gridView: { screen: GridViewScreenContainer },
              caseInfo: { screen: CaseScreenContainer },
              eventInfo: { screen: EventInfoScreenContainer },
              locationTracking: { screen: LocationTrackingScreenContainer }
            })
          },
          savedContainer: {
            screen: StackNavigator({
              saved: { screen: SavedScreenContainer },
              caseInfo: { screen: CaseScreenContainer },
              eventInfo: { screen: EventInfoScreenContainer },
              locationTracking: { screen: LocationTrackingScreenContainer }
            })
          },
          mapContainer: {
            screen: StackNavigator({
              map: { screen: MapScreenContainer },
              caseInfo: { screen: CaseScreenContainer },
              eventInfo: { screen: EventInfoScreenContainer },
              locationTracking: { screen: LocationTrackingScreenContainer }
            })
          },
          randomContainer: {
            screen: RandomScreenContainer
          },
          profileContainer: {
            screen: StackNavigator({
              profile: { screen: ProfileScreenContainer },
              locationTracking: { screen: LocationTrackingScreenContainer }
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
    // await Permissions.askAsync(Permissions.LOCATION);
    await Font.loadAsync({
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-semibold': require('./assets/fonts/Raleway-SemiBold.ttf'),
      'proxima-nova-regular': require('./assets/fonts/ProximaNova-Regular.otf'),
      'proxima-nova-extra-bold': require('./assets/fonts/ProximaNova-ExtraBold.otf')
    });
    await Asset.loadAsync(require('./assets/images/Background_Login_1.png'));
    await Asset.loadAsync(require('./assets/images/Background_Login_2.jpg'));
    await Asset.loadAsync(require('./assets/logo.png'));
    setCustomText({ style: { fontFamily: 'proxima-nova-regular' } });
    setCustomTextInput({ style: { fontFamily: 'proxima-nova-regular' } });
    this.setState({ assetLoaded: true });
  };

  render() {
    if (this.state.assetLoaded) {
      return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <MainNavigator />
          </View>
        </Provider>
      );
    } else {
      return <LoadingScreen />;
    }
  }
}
