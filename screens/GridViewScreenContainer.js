import React, { Component } from 'react';
import GridViewScreen from './GridViewScreen';
import { connect } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import { Icon } from 'react-native-elements';
import { setSelectedEventId } from '../actions/events';
import { setSelectedCaseId } from '../actions/cases';
import { NavigationActions } from 'react-navigation';

class GridViewScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Grid View',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTintColor: 'white',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" type="font-awesome" color={tintColor} />
    ),
    tabBarLabel: 'Home',
    tabBarOnPress: ({ jumpToIndex, scene }) => {
      jumpToIndex(scene.index);
      navigation.dispatch(NavigationActions.reset({
        index: scene.index,
        actions: [
          NavigationActions.navigate({ routeName: scene.route.routes[0].routeName })
        ]
      }))
    }
  });

  onClickCaseCard = selectedCase => {
    this.props.setSelectedCaseId(selectedCase.id);
    this.props.navigation.navigate('caseInfo', { tabBarLabel: 'Home' });
  };

  onClickEventCard = selectedEvent => {
    this.props.setSelectedEventId(selectedEvent.id);
    this.props.navigation.navigate('eventInfo', { tabBarLabel: 'Home' });
  };

  render() {
    const { currentDataForGridView } = this.props;
    if (currentDataForGridView) {
      return (
        <GridViewScreen
          data={currentDataForGridView}
          onClickEventCard={this.onClickEventCard}
          onClickCaseCard={this.onClickCaseCard}
        />
      );
    } else {
      return <LoadingScreen />;
    }
  }
}

const mapStateToProps = state => ({
  currentDataForGridView: state.system.currentDataForGridView,
  selectedEventId: state.events.selectedEventId,
  selectedCaseId: state.cases.selectedCaseId
});

export default connect(mapStateToProps, {
  setSelectedCaseId,
  setSelectedEventId
})(GridViewScreenContainer);
