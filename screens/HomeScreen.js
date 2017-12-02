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

const HomeScreen = () => {
  // TODO: Change from SearchBar to GoogleAutoCompleteBar
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        placeholder="Search for people/events/areas..."
        round
        inputStyle={{ backgroundColor: 'white' }}
        containerStyle={{
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
          borderTopWidth: 0
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
              items={ENTRIES1}
              renderItem={({ item }) => <CaseCard caseInfo={{}} />}
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
              items={ENTRIES1}
              renderItem={({ item }) => <CaseCard caseInfo={{}} />}
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
              items={ENTRIES1}
              renderItem={({ item }) => <CaseCard caseInfo={{}} />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
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
    color: '#50C9BA'
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
