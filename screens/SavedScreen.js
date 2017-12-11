import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import { ButtonGroup, Icon, List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { wp, hp } from '../utils/index';
import { objToArrIncludingKey } from '../utils/index';

const buttonLabels = ['Cases', 'Events'];

const Avatar = ({ type }) =>
  type === 'case' ? (
    <Icon name="user-secret" color="black" size={40} type="font-awesome" />
  ) : (
    <Icon name="calendar" color="black" size={40} type="font-awesome" />
  );

const Subtitle = ({
  lastSeenLocName,
  type,
  eventLocation,
  eventTime,
}) =>
  type === 'case' ? (
    <View style={styles.subtitle}>
      <View style={styles.subtitleLocationStyle}>
        <Icon
          size={15}
          type="font-awesome"
          name="map-marker"
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.subtitleText}>Last seen: {lastSeenLocName}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.subtitle}>
      <View style={styles.subtitleLocationStyle}>
        <Icon
          size={15}
          type={'font-awesome'}
          name={'map-marker'}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.subtitleText}>{eventLocation}</Text>
      </View>
      <View style={styles.subtitleTimeStyle}>
        <Icon
          size={10}
          type={'font-awesome'}
          name={'clock-o'}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.subtitleText}>{eventTime}</Text>
      </View>
    </View>
  );
Subtitle.propTypes = {
  lastSeenLocName: PropTypes.string,
  type: PropTypes.string,
  eventLocation: PropTypes.string,
  eventTime: PropTypes.string
};

const SavedScreen = ({
  onPressButtonGroup,
  currentTab,
  cases,
  events,
  onPressCase,
  onPressEvent
}) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <ButtonGroup
          onPress={onPressButtonGroup}
          selectedIndex={currentTab}
          innerBorderStyle={{ color: '#4BA2AC' }}
          buttons={buttonLabels}
          textStyle={{ color: '#4BA2AC' }}
          selectedTextStyle={styles.selectedTextStyle}
          containerStyle={styles.buttonGroupContainer}
          buttonStyle={styles.buttonStyle}
          selectedBackgroundColor="#4BA2AC"
        />
      </View>

      <View style={styles.savedDataContainer}>
        <List containerStyle={styles.savedDataList}>
          {currentTab === 0 ? (
            <FlatList
              data={objToArrIncludingKey(cases)}
              renderItem={({ item }) => (
                <ListItem
                  avatar={<Avatar type="case" />}
                  title={item.name}
                  key={item.id}
                  subtitle={
                    <Subtitle
                      lastSeenLocName={`${item.lastKnownLoc.city}, ${item.lastKnownLoc.country}`}
                      type="case"
                    />
                  }
                  chevronColor="#4BA2AC"
                  onPress={() => onPressCase(item.id)}
                />
              )}
              keyExtractor={item => item.id}
            />
          ) : (
            <FlatList
              data={objToArrIncludingKey(events)}
              renderItem={({ item }) => (
                <ListItem
                  avatar={<Avatar type="event" />}
                  title={item.name}
                  key={item.id}
                  subtitle={
                    <Subtitle
                      eventLocation={`${item.loc.city}, ${item.loc.country}`}
                      eventTime={`${item.date}, ${item.time}`}
                      type="event"
                    />
                  }
                  chevronColor="#4BA2AC"
                  onPress={() => onPressEvent(item.id)}
                />
              )}
              keyExtractor={item => item.id}
            />
          )}
        </List>
      </View>
    </View>
  );
};

SavedScreen.propTypes = {
  currentTab: PropTypes.number,
  onPressButtonGroup: PropTypes.func,
  onPressCase: PropTypes.func,
  onPressEvent: PropTypes.func,
  cases: PropTypes.object,
  events: PropTypes.object
};

SavedScreen.defaultProps = {
  currentTab: 0,
  onPressButtonGroup: () => {},
  onPressCase: () => {},
  onPressEvent: () => {},
  cases: {},
  events: {}
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f1f2f2',
    alignItems: 'center'
  },

  header: {
    flex: 1,
    height: 25,
    marginTop: hp(1),
    marginBottom: hp(1)
  },

  buttonGroupContainer: {
    height: 40,
    width: '50%',
    backgroundColor: 'white',
    borderColor: '#4BA2AC'
  },

  selectedTextStyle: {
    color: 'white'
  },

  buttonStyle: {
    padding: 10
  },

  savedDataContainer: {
    flex: 18,
    flexDirection: 'row'
  },

  savedDataList: {
    flex: 1
  },

  subtitle: {
    marginLeft: 10
  },

  subtitleLocationStyle: {
    flexDirection: 'row'
  },

  subtitleText: {
    color: 'gray',
    marginLeft: 5
  },

  subtitleTimeStyle: {
    flexDirection: 'row'
  },

  iconStyle: {
    color: '#4BA2AC'
  }
});

export default SavedScreen;
