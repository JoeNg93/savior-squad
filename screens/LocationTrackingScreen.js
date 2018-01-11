import React from 'react';
import { MapView } from 'expo';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { hp, wp } from '../utils';

const LocationTrackingScreen = ({
  onClickStopTracking,
  onClickTakeSnapshot,
  onLoadMap,
  currentLocation,
  users
}) => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          ...currentLocation,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
        style={{ flex: 1 }}
        ref={onLoadMap}
      >
        <MapView.Marker coordinate={currentLocation} />
        {_.map(users, userInfo => {
          if (userInfo.location) {
            return (
              <MapView.Marker coordinate={userInfo.location} key={userInfo.uid}>
                {/*<Icon type="material-community" name="account-location" />*/}
                <Text style={{ color: userInfo.markerColor }}>
                  {userInfo.name}
                </Text>
                <Icon
                  type="font-awesome"
                  size={20}
                  name="user-circle-o"
                  color={userInfo.markerColor}
                />
              </MapView.Marker>
            );
          }
          return null;
        })}
        {_.flatMap(users, userInfo => {
          if (userInfo.trackingLocs) {
            return _.map(userInfo.trackingLocs, ({ latitude, longitude }) => {
              return (
                <MapView.Marker
                  coordinate={{ latitude, longitude }}
                  key={`${userInfo.uid},${latitude},${longitude}`}
                >
                  {/*<Icon type="material-community" name="account-location" />*/}
                  <Icon
                    type="font-awesome"
                    size={10}
                    name="dot-circle-o"
                    color={userInfo.markerColor}
                  />
                </MapView.Marker>
              );
            });
          }
          return null;
        })}
      </MapView>
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
  onClickStopTracking: PropTypes.func,
  onClickTakeSnapshot: PropTypes.func,
  onLoadMap: PropTypes.func,
  currentLocation: PropTypes.object,
  users: PropTypes.object
};

LocationTrackingScreen.defaultProps = {
  users: {},
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
