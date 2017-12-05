import React, { Component } from 'react';
import LocationTrackingScreen from './LocationTrackingScreen';
import { takeSnapshotAsync } from 'expo';
import { CameraRoll, Alert } from 'react-native';

class LocationTrackingScreenContainer extends Component {
  onLoadMap = mapViewComponent => (this.mapViewComponent = mapViewComponent);

  onClickTakeSnapshot = async () => {
    const result = await takeSnapshotAsync(this.mapViewComponent, { format: 'png', result: 'file' });
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
