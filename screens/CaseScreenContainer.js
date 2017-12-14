import React, { Component } from 'react';
import { connect } from 'react-redux';
import CaseScreen from './CaseScreen';
import { Icon } from 'react-native-elements';
import LoadingScreen from '../components/LoadingScreen';
import { setSelectedEventId } from '../actions/events';
import { NavigationActions } from 'react-navigation';
import { getIconName } from '../utils/index';
import { View, TouchableOpacity, Alert, Share } from 'react-native';
import { saveCase, unsaveCase } from '../actions/cases';

class CaseScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Case',
    headerStyle: { backgroundColor: '#50C9BA' },
    headerTintColor: 'white',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={getIconName(navigation.state.params.tabBarLabel)}
        type="font-awesome"
        color={tintColor}
      />
    ),
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={async () => {
            const {
              saveCase,
              unsaveCase,
              caseIsSaved
            } = navigation.state.params;
            if (caseIsSaved) {
              const { status } = await unsaveCase();
              if (status === 'success') {
                Alert.alert('Success', 'Unsaved!');
                navigation.setParams({ caseIsSaved: false });
              }
            } else {
              const { status } = await saveCase();
              if (status === 'success') {
                Alert.alert('Success', 'Saved!');
                navigation.setParams({ caseIsSaved: true });
              }
            }
          }}
        >
          <Icon
            type="font-awesome"
            name={navigation.state.params.caseIsSaved ? 'star' : 'star-o'}
            iconStyle={{
              color: navigation.state.params.caseIsSaved ? '#4BA2AC' : 'white'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => {
            const { caseInfo } = navigation.state.params;
            const { lastKnownLoc, name, id } = caseInfo;
            Share.share({
              title: `Looking for ${name}`,
              message: `Hey, we are looking for ${caseInfo.name}, his last known location is: ${lastKnownLoc.streetAddress}, ${lastKnownLoc.postalCode} ${lastKnownLoc.city}, ${lastKnownLoc.country}. Join us at: https://www.savior-squad.com/cases/${id}`
            });
          }}
        >
          <Icon
            type="font-awesome"
            name="share"
            iconStyle={{ color: 'white' }}
          />
        </TouchableOpacity>
      </View>
    ),
    tabBarLabel: navigation.state.params.tabBarLabel,
    tabBarOnPress: ({ jumpToIndex, scene }) => {
      jumpToIndex(scene.index);
      navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: scene.route.routes[0].routeName
            })
          ]
        })
      );
    }
  });

  componentDidMount() {
    const {
      selectedCaseId,
      navigation,
      saveCase,
      unsaveCase,
      currentUser,
      allCases
    } = this.props;
    navigation.setParams({
      saveCase: () => saveCase(selectedCaseId),
      unsaveCase: () => unsaveCase(selectedCaseId),
      caseIsSaved: !!(currentUser.cases && currentUser.cases[selectedCaseId]),
      caseInfo: { ...allCases[selectedCaseId], id: selectedCaseId }
    });
  }

  onPressEventItem = eventId => {
    const { setSelectedEventId, navigation } = this.props;
    setSelectedEventId(eventId);
    navigation.navigate('eventInfo', {
      tabBarLabel: navigation.state.params.tabBarLabel
    });
  };

  onClickMoreInfo = () => this.moreInfoModal.open();

  onClickCloseMoreInfo = () => this.moreInfoModal.close();

  onClickContactOwner = () => this.contactOwnerModal.open();

  onClickCloseContactOwner = () => this.contactOwnerModal.close();

  onClickCreateEvent = () => this.createEventModal.open();

  onClickCloseCreateEvent = () => this.createEventModal.close();

  render() {
    const { selectedCaseId, allCases } = this.props;
    if (selectedCaseId) {
      return (
        <CaseScreen
          caseInfo={{ ...allCases[selectedCaseId], id: selectedCaseId }}
          onGetMarkerRef={ref => (this.markerRef = ref)}
          onMapRegionChangeComplete={() => this.markerRef.showCallout()}
          onPressEventItem={this.onPressEventItem}
          onClickMoreInfo={this.onClickMoreInfo}
          getMoreInfoModalRef={ref => {
            this.moreInfoModal = ref;
          }}
          onClickCloseMoreInfo={this.onClickCloseMoreInfo}
          getContactOwnerModalRef={ref => {
            this.contactOwnerModal = ref;
          }}
          getCreateEventModalRef={ref => {
            this.createEventModal = ref;
          }}
          onClickContactOwner={this.onClickContactOwner}
          onClickCloseContactOwner={this.onClickCloseContactOwner}
          onClickCreateEvent={this.onClickCreateEvent}
          onClickCloseCreateEvent={this.onClickCloseCreateEvent}
        />
      );
    } else {
      return <LoadingScreen />;
    }
  }
}

const mapStateToProps = state => ({
  selectedCaseId: state.cases.selectedCaseId,
  allCases: state.cases.allCases,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, {
  setSelectedEventId,
  saveCase,
  unsaveCase
})(CaseScreenContainer);
