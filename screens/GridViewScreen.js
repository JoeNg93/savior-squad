import React from 'react';
import { StyleSheet } from 'react-native';
import CaseCard from '../components/CaseCard';
import GridView from 'react-native-super-grid';

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

const GridViewScreen = ({}) => {
  return (
    <GridView
      itemDimension={130}
      items={ENTRIES1}
      style={styles.gridView}
      renderItem={item => <CaseCard caseInfo={{}} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BA2AC'
  },
  gridView: {
    paddingTop: 25,
    flex: 1
  },
  containerSmall: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f2f2'
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  social: {
    height: 56,
    width: 56
  }
});

export default GridViewScreen;
