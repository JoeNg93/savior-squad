import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const EventCard = ({ eventInfo, onTapCard }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Icon name='calendar' type='font-awesome' size={50} color='#f1f2f2'/>
        <Text style={styles.header}>Find big Joe asap</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.line}>
          <Icon type='font-awesome' name='map-marker' size={20}/>
          <Text>{'  '}Oulu</Text>
        </View>
        <View style={styles.line}>
          <Icon type='font-awesome' name='clock-o' size={20}/>
          <Text>{' '}21 Dec - 10:00 AM</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: viewportWidth / 2,
    height: 250,
    borderWidth: 1,
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
  }
});

EventCard.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  opTapCard: PropTypes.func
};

EventCard.defaultProps = {
  onTapCard: () => {}
};

export default EventCard;
