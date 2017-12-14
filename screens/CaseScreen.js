import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import MapView from 'react-native-maps';
import { Carousel } from 'nachos-ui';
import { Button, Icon, List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { objToArrIncludingKey } from '../utils/index';

const { width, height } = Dimensions.get('window');

const renderSubtitle = ({ country, city, date, time }) => {
  return (
    <View style={styles.subtitle}>
      <View style={styles.subtitleLocationStyle}>
        <Icon
          size={15}
          type="font-awesome"
          name="map-marker"
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.subtitleText}>
          {city}, {country}
        </Text>
      </View>
      <View style={styles.subtitleTimeStyle}>
        <Icon
          size={10}
          type={'font-awesome'}
          name={'clock-o'}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.subtitleText}>
          {date}, {time}
        </Text>
      </View>
    </View>
  );
};

const renderEventAvatar = ({ upcoming }) => {
  if (upcoming) {
    return (
      <Icon
        name="calendar-check-o"
        color="green"
        size={40}
        type="font-awesome"
      />
    );
  } else {
    return (
      <Icon
        name="calendar-times-o"
        color="gray"
        size={40}
        type="font-awesome"
      />
    );
  }
};

const CaseScreen = ({
  caseInfo,
  onGetMarkerRef,
  onMapRegionChangeComplete,
  onPressEventItem
}) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.ScreenContainer}>
        <View style={styles.FirstPageContainer}>
          <View style={styles.CarouselContainer}>
            <View style={styles.CarouselView}>
              <Carousel
                height={378}
                width={width}
                indicatorStyle={{ color: 'white' }}
                indicatorActiveStyle={{ color: '#4BA2AC' }}
                indicatorSize={30}
              >
                <Image
                  style={{ width: width, height: 378 }}
                  source={{
                    uri: caseInfo.imgUrls[0]
                  }}
                />
                <Image
                  style={{ width: width, height: 378 }}
                  source={{ uri: 'https://placehold.it/300/59C480' }}
                />
                <Image
                  style={{ width: width, height: 378 }}
                  source={{ uri: 'https://placehold.it/300/546C80' }}
                />
              </Carousel>
            </View>
          </View>

          <View style={styles.InfoOuterContainer}>
            <View style={styles.InfoInnerContainer}>
              <View style={styles.InfoTextContainer}>
                <View style={styles.InfoTitleText}>
                  <Text
                    style={{
                      fontSize: 40,
                      color: 'black',
                      textAlign: 'center',
                      fontWeight: '300'
                    }}
                  >
                    {caseInfo.name}
                  </Text>
                </View>
                <View style={styles.InfoBodyTextView}>
                  <Text style={styles.InfoBodyTextStyle}>
                    {caseInfo.context}
                    <TouchableOpacity style={styles.MoreInfoLink}>
                      <Text style={{ color: 'blue', fontSize: 14 }}>
                        {' '}
                        More info
                      </Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>

              <View style={styles.InfoButtonsContainer}>
                <View style={styles.ContactOwnerView}>
                  <Button
                    raised={false}
                    title="Contact Owner"
                    style={styles.ContactOwnerButton}
                    backgroundColor="white"
                    color="#4BA2AC"
                    borderRadius={3}
                    underlayColor="#4BA2AC"
                  />
                </View>
                <View style={styles.CreateEventView}>
                  <Button
                    raised={false}
                    title="Create Event"
                    style={styles.CreateEventButton}
                    backgroundColor="white"
                    color="#4BA2AC"
                    borderRadius={3}
                    underlayColor="#4BA2AC"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.SecondPageContainer}>
          <Text style={styles.LastSeen}>Last seen</Text>
          <MapView
            initialRegion={{
              ...caseInfo.lastKnownLoc.coord,
              latitudeDelta: 0.03,
              longitudeDelta: 0.03
            }}
            style={{ flex: 1 }}
            scrollEnabled={false}
            onRegionChangeComplete={onMapRegionChangeComplete}
          >
            <MapView.Marker
              coordinate={{
                ...caseInfo.lastKnownLoc.coord
              }}
              title="Last Known"
              description={`${caseInfo.lastKnownLoc.streetAddress}, ${caseInfo
                .lastKnownLoc.city}, ${caseInfo.lastKnownLoc.country}`}
              ref={onGetMarkerRef}
            >
              <View style={styles.mapIndicator} />
            </MapView.Marker>
          </MapView>
          <Text style={styles.PastEvents}>Past Events</Text>
          <View style={styles.PastEventsContainer}>
            <List>
              <FlatList
                data={objToArrIncludingKey(caseInfo.events)}
                renderItem={({ item }) => (
                  <ListItem
                    avatar={renderEventAvatar({ upcoming: true })}
                    key={item.id}
                    title={item.name}
                    subtitle={renderSubtitle({
                      city: item.loc.city,
                      country: item.loc.country,
                      date: item.date,
                      time: item.time
                    })}
                    chevronColor="#4BA2AC"
                    onPress={() => onPressEventItem(item.id)}
                  />
                )}
                keyExtractor={(item, index) => index}
              />
            </List>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

CaseScreen.propTypes = {
  caseInfo: PropTypes.object,
  onGetMarkerRef: PropTypes.func,
  onMapRegionChangeComplete: PropTypes.func,
  onPressEventItem: PropTypes.func
};

CaseScreen.defaultProps = {
  caseInfo: {},
  onGetMarkerRef: () => {},
  onMapRegionChangeComplete: () => {},
  onPressEventItem: () => {}
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

  FirstPageContainer: {
    flex: 1
  },

  SecondPageContainer: {
    height: 700
  },

  CarouselContainer: {
    flex: 1
    // alignItems: 'center',
  },

  CarouselView: {
    flex: 1
  },

  InfoOuterContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    // shadowOffset: {width: 1, height: 1,},
    // shadowColor: 'black',
    // shadowOpacity: 0.4,
    borderRadius: 4
  },

  InfoInnerContainer: {
    flex: 1
    // flexDirection: 'column',
  },

  InfoTextContainer: {
    flex: 1
    // flexDirection: 'column',
  },

  InfoTitleText: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingLeft: 5,
  },

  InfoBodyTextView: {
    flex: 1,
    // justifyContent: 'flex-start',
    paddingTop: 10
  },

  InfoBodyTextStyle: {
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5
  },

  InfoButtonsContainer: {
    flex: 1
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center'
  },

  ContactOwnerView: {
    flex: 1,
    // justifyContent: 'flex-end',
    paddingBottom: 5,
    width: '100%',
    borderRadius: 3,
    marginTop: 80
  },

  CreateEventView: {
    flex: 1,
    // justifyContent: 'flex-start',
    paddingTop: 5,
    width: '100%',
    borderRadius: 3,
    marginBottom: 20
  },

  ContactOwnerButton: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#4BA2AC'
  },

  CreateEventButton: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#4BA2AC'
  },

  LastSeen: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '200',
    marginTop: 20
  },

  PastEvents: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '200',
    marginTop: 20
  },

  PastEventsContainer: {
    flex: 1
  },

  subtitleText: {
    color: 'gray',
    // flexDirection: 'row',
    marginLeft: 5
  },

  subtitle: {
    marginLeft: 10
    // alignItems: 'flex-start',
  },

  subtitleLocationStyle: {
    flexDirection: 'row'
  },

  iconStyle: {
    // flexDirection: 'row',
    color: '#4BA2AC'
  },

  subtitleTimeStyle: {
    flexDirection: 'row'
  },

  MoreInfoLink: {
    height: 13,
    width: 65,
    marginLeft: 4
  },
  mapIndicator: {
    backgroundColor: '#9EE6CF',
    opacity: 0.4,
    height: 36,
    width: 36,
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: '#004d40'
  }
});

export default CaseScreen;
