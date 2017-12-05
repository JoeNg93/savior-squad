import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import Slider from '../components/Slider';
import PropTypes from 'prop-types';
import CaseCard from '../components/CaseCard';
import { Icon } from 'react-native-elements';

const MapScreen = ({
  onLoadMap,
  onLoadCarousel,
  onSlideToCard,
  renderItem,
  items,
  initialRegion,
  data,
  onPressMarker
}) => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={initialRegion}
        ref={onLoadMap}
      >
        {data.markers.map((marker, index) => {
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate}>
              <TouchableOpacity style={styles.markerContainerStyle} onPress={() => onPressMarker(index) }>
                <Icon
                  name="user-secret"
                  type="font-awesome"
                  color="white"
                  containerStyle={{ backgroundColor: '#4BA2AC' }}
                />
              </TouchableOpacity>
            </MapView.Marker>
          );
        })}
      </MapView>
      <View style={styles.cardSliderContainer}>
        <Slider
          items={items}
          onLoadCarousel={onLoadCarousel}
          renderItem={renderItem}
          inactiveSlideOpacity={0.7}
          inactiveSlideScale={0.9}
          activeSlideAlignment="center"
          firstItem={1}
          onSlideToItem={onSlideToCard}
        />
      </View>
    </View>
  );
};

MapScreen.propTypes = {
  onLoadCarousel: PropTypes.func,
  onLoadMap: PropTypes.func,
  onSlideToCard: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  data: PropTypes.object,
  initialRegion: PropTypes.object,
  onPressMarker: PropTypes.func
};

MapScreen.defaultProps = {
  onLoadCarousel: () => {},
  onLoadMap: () => {},
  onSlideToCard: () => {},
  onPressMarker: () => {}
};

const styles = StyleSheet.create({
  cardSliderContainer: {
    position: 'absolute',
    bottom: 0
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)'
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)'
  },
  markerContainerStyle: {
    borderRadius: 50,
    height: 36,
    width: 36,
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

export default MapScreen;
