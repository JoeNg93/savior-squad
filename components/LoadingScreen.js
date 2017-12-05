import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from 'nachos-ui';

const LoadingScreen = ({ backgroundColor, loaderColor }) => {
  return (
    <View style={[styles.loader, { backgroundColor }]}>
      <Spinner color={loaderColor} duration={300} />
    </View>
  );
};

LoadingScreen.propTypes = {
  backgroundColor: PropTypes.string,
  loaderColor: PropTypes.string
};

LoadingScreen.defaultProps = {
  backgroundColor: 'white',
  loaderColor: '#4BA2AC'
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LoadingScreen;
