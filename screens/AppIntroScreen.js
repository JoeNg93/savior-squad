import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const AppIntroScreen = ({ slides, onDone }) => {
  return (
    <AppIntroSlider slides={slides} onDone={onDone} renderItem={renderItems} />
  );
};

AppIntroScreen.propTypes = {
  slides: PropTypes.array,
  onDone: PropTypes.func
};

AppIntroScreen.defaultProps = {
  onDone: () => {}
};

const renderItems = props => (
  <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
    <Icon name={props.iconName} color="white" type="font-awesome" size={250} />
    <Text style={styles.heading}>{props.heading}</Text>
    <Text style={styles.description}>{props.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    marginRight: 20,
    marginLeft: 20,
    fontFamily: 'raleway-regular'
  },
  heading: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    fontFamily: 'raleway-semibold',
    marginTop: 40,
    marginBottom: 40
  }
});

export default AppIntroScreen;
