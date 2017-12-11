import React, { Component } from 'react';
import LocationTrackingScreen from './LocationTrackingScreen';
import { takeSnapshotAsync } from 'expo';
import { CameraRoll, Alert, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { wp, hp } from '../utils/index';

class LocationTrackingScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.state.params.eventName,
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
    headerLeft: (
      <TouchableOpacity
        style={{ paddingLeft: wp(2) }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="angle-left" type="font-awesome" color="white" size={35} />
      </TouchableOpacity>
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="wheelchair-alt" type="font-awesome" color={tintColor} />
    ),
    tabBarLabel: 'Random'
  });

  onLoadMap = mapViewComponent => (this.mapViewComponent = mapViewComponent);

  onClickTakeSnapshot = async () => {
    const result = await takeSnapshotAsync(this.mapViewComponent, {
      format: 'png',
      result: 'file'
    });
    await CameraRoll.saveToCameraRoll(result, 'photo');
    Alert.alert('Success', 'Screenshot is saved to your Photos Library!');
  };

  onClickStopTracking = () => {
    Alert.alert(
      'Stop tracking',
      'Are you sure you want to stop tracking? No one can see you anymore',
      [{ text: 'Cancel', onPress: () => {} }, { text: 'OK', onPress: () => {} }]
    );
  };

  render() {
    return (
      <LocationTrackingScreen
        onLoadMap={this.onLoadMap}
        onClickTakeSnapshot={this.onClickTakeSnapshot}
        onClickStopTracking={this.onClickStopTracking}
      />
    );
  }
}

export default LocationTrackingScreenContainer;
