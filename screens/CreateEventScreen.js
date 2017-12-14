import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { Input } from 'nachos-ui';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { wp, hp } from '../utils/index';

const CreateEventScreen = ({
  onClickCloseCreateEvent,
  caseInfo,
  eventTitle,
  eventDate,
  eventTime,
  eventLocation,
  eventDescription
}) => {
  const defaultInputStyle = { margin: 15 };
  const largeInputStyle = {
    margin: 15,
    paddingBottom: 150
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
      <Header
        leftComponent={
          <TouchableOpacity onPress={onClickCloseCreateEvent}>
            <Icon name="close" color="white" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'Create event',
          style: { fontSize: 16, color: '#fff' }
        }}
        backgroundColor="#4BA2AC"
      />

      <View contentContainerStyle={styles.contentContainer}>
        <View style={styles.textTop}>
          <Text style={{ color: '#999999', fontSize: 20 }}>Related with </Text>
          <Text style={{ color: '#4BA2AC', fontWeight: 'bold', fontSize: 20 }}>
            {caseInfo.name}
          </Text>
        </View>

        <Input
          /* status='valid' */
          style={defaultInputStyle}
          placeholder="Event title"
          value={eventTitle}
          onChangeText={() => {}}
        />

        <Input
          /* status='valid' */
          style={defaultInputStyle}
          placeholder="Location"
          value={eventLocation}
          onChangeText={() => {}}
        />

        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '50%' }}>
            <Input
              /* status='valid' */
              style={defaultInputStyle}
              placeholder="Date"
              value={eventDate}
              onChangeText={() => {}}
            />
          </View>

          <View style={{ width: '50%' }}>
            <Input
              /* status='valid' */
              style={defaultInputStyle}
              placeholder="Time"
              value={eventTime}
              onChangeText={() => {}}
            />
          </View>
        </View>

        <Input
          /* status='valid' */
          style={largeInputStyle}
          placeholder="Informations"
          value={eventDescription}
          onChangeText={() => {}}
        />

        <View style={styles.button}>
          <Button
            raised
            iconLeft
            backgroundColor="#4BA2AC"
            icon={{ name: 'add' }}
            title="CREATE EVENT"
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

CreateEventScreen.propTypes = {
  onClickCloseCreateEvent: PropTypes.func,
  eventTitle: PropTypes.string,
  eventDate: PropTypes.string,
  eventTime: PropTypes.string,
  eventLocation: PropTypes.string,
  eventDescription: PropTypes.string,
  caseInfo: PropTypes.object
};

CreateEventScreen.defaultProps = {
  onClickCloseCreateEvent: () => {},
  eventTitle: '',
  eventDate: '',
  eventTime: '',
  eventLocation: '',
  eventDescription: '',
  caseInfo: {}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1F2F2'
  },

  contentContainer: {
    paddingVertical: 10
  },

  textTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
    marginBottom: hp(2)
  },

  button: {
    marginVertical: 25
  }
});

export default CreateEventScreen;
