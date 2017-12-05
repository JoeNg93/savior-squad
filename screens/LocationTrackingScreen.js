import React from 'react';
import { MapView } from 'expo';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { hp, wp } from '../utils';

const LocationTrackingScreen = ({
  userLocations,
  onClickStopTracking,
  onClickTakeSnapshot,
  onLoadMap,
  initialRegion
}) => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={initialRegion}
        style={{ flex: 1 }}
        ref={onLoadMap}
      />
      <Button
        title="Stop Tracking"
        raised
        icon={{ name: 'location-arrow', type: 'font-awesome' }}
        containerViewStyle={styles.buttonStopTrackingContainerStyle}
        buttonStyle={styles.buttonStopTrackingStyle}
        onPress={onClickStopTracking}
      />
      <TouchableOpacity
        style={styles.buttonCameraContainerStyle}
        onPress={onClickTakeSnapshot}
      >
        <Icon
          name="camera"
          type="font-awesome"
          iconStyle={{ color: 'white' }}
        />
      </TouchableOpacity>
    </View>
  );
};

LocationTrackingScreen.propTypes = {
  userLocations: PropTypes.object,
  initialRegion: PropTypes.object,
  onClickStopTracking: PropTypes.func,
  onClickTakeSnapshot: PropTypes.func,
  onLoadMap: PropTypes.func
};

LocationTrackingScreen.defaultProps = {
  userLocations: {},
  onClickStopTracking: () => {},
  onClickTakeSnapshot: () => {},
  onLoadMap: () => {}
};

const styles = StyleSheet.create({
  buttonStopTrackingContainerStyle: {
    position: 'absolute',
    bottom: hp(2),
    left: wp(15),
    right: wp(15)
  },
  buttonStopTrackingStyle: {
    backgroundColor: '#4BA2AC'
  },
  buttonCameraContainerStyle: {
    position: 'absolute',
    right: wp(2),
    bottom: hp(2),
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4BA2AC',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.5
  }
});

export default LocationTrackingScreen;
