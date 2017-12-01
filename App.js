import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Font } from 'expo';
import AppIntroScreenContainer from './screens/AppIntroScreenContainer';
import LoadingScreen from './components/LoadingScreen';

export default class App extends React.Component {
  state = {
    assetLoaded: false
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
          <AppIntroScreenContainer />
        </Provider>
      );
    } else {
      return <LoadingScreen />;
    }
  }
}
