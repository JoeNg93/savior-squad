import React, { Component } from 'react';
import GridViewScreen from './GridViewScreen';

class GridViewScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'All cases',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTitleStyle: { color: 'white' }
  });

  render() {
    return <GridViewScreen />;
  }
}

export default GridViewScreenContainer;
