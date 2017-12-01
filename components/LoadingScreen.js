import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const LoadingScreen = ({ backgroundColor, loaderColor }) => {
  return (
    <View style={[styles.loader, { backgroundColor }]}>
      <ActivityIndicator size="large" color={loaderColor} />
    </View>
  );
};

LoadingScreen.propTypes = {
  backgroundColor: PropTypes.string,
  loaderColor: PropTypes.string
};

LoadingScreen.defaultProps = {
  backgroundColor: '#4BA2AC',
  loaderColor: 'white'
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LoadingScreen;
