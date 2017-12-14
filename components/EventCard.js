import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

const itemHorizontalMargin = 8;

const EventCard = ({ eventInfo, onTapCard }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.cardContainer}
      onPress={() => onTapCard(eventInfo)}
    >
      <View style={styles.imageContainer}>
        <Icon name="calendar" type="font-awesome" size={50} color="#f1f2f2" />
        <Text style={styles.header}>{eventInfo.name}</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.line}>
          <Icon type="font-awesome" name="map-marker" size={20} />
          <Text style={styles.eventInfoText}>
            {'  '}
            {eventInfo.loc.city}, {eventInfo.loc.country}
          </Text>
        </View>
        <View style={styles.line}>
          <Icon type="font-awesome" name="clock-o" size={20} />
          <Text style={styles.eventInfoText}>
            {' '}
            {eventInfo.date}, {eventInfo.time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

EventCard.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  onTapCard: PropTypes.func
};

EventCard.defaultProps = {
  onTapCard: () => {}
};

const styles = StyleSheet.create({
  cardContainer: {
    width: viewportWidth / 2.2,
    height: 225,
    paddingRight: itemHorizontalMargin * 2
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50C9BA'
  },
  textContainer: {
    flex: 1,
    padding: 10
  },
  header: {
    marginTop: 10,
    color: '#f1f2f2'
  },
  line: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center'
  },
  eventInfoText: {
    fontSize: 12
  }
});

export default EventCard;
