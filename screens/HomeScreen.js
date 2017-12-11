import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import CaseCard from '../components/CaseCard';
import Slider from '../components/Slider';
import PropTypes from 'prop-types';
import EventCard from '../components/EventCard';
import { objToArrIncludingKey } from '../utils/index';
import { wp, hp } from '../utils/index';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'http://i.imgur.com/UYiroysl.jpg'
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'http://i.imgur.com/MABUbpDl.jpg'
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'http://i.imgur.com/KZsmUi2l.jpg'
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://i.imgur.com/lceHsT6l.jpg'
  }
];

const HomeScreen = ({ cases, events, nearestThings }) => {
  // TODO: Change from SearchBar to GoogleAutoCompleteBar
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SearchBar
        placeholder="Search for people/events/areas..."
        round
        inputStyle={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#2f2135',
          fontSize: 13
        }}
        containerStyle={{
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          marginTop: hp(1)
        }}
      />

      <ScrollView>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Near You</Text>
            <TouchableOpacity style={styles.leftTextHolderStyle}>
              <Text style={styles.leftTextStyle}>See all ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContentContainer}>
            <Slider
              items={nearestThings}
              renderItem={({ item }) =>
                item.age ? (
                  <CaseCard caseInfo={item} />
                ) : (
                  <EventCard eventInfo={item} />
                )}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Cases</Text>
            <TouchableOpacity style={styles.leftTextHolderStyle}>
              <Text style={styles.leftTextStyle}>See all ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContentContainer}>
            <Slider
              items={cases}
              renderItem={({ item }) => <CaseCard caseInfo={item} />}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Events</Text>
            <TouchableOpacity style={styles.leftTextHolderStyle}>
              <Text style={styles.leftTextStyle}>See all ></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContentContainer}>
            <Slider
              items={events}
              renderItem={({ item }) => <EventCard eventInfo={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

HomeScreen.propTypes = {
  cases: PropTypes.array,
  events: PropTypes.array,
  nearestThings: PropTypes.array
};

HomeScreen.defaultProps = {
  cases: [],
  events: [],
  nearestThings: []
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 32,
    marginTop: 8,
    marginLeft: 16
  },
  leftTextHolderStyle: {
    position: 'absolute',
    right: 5
  },
  leftTextStyle: {
    fontWeight: 'bold',
    color: '#4BA2AC'
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f2135'
  },
  sectionContentContainer: {
    marginTop: 8
  }
});

export default HomeScreen;
