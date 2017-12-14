import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const CaseInfo = ({ caseInfo, onClickCloseMoreInfo }) => {
  return (
    <ScrollView style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={onClickCloseMoreInfo}>
            <Icon name="close" color="white" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: caseInfo.name,
          style: { fontSize: 16, color: '#fff' }
        }}
        backgroundColor="#4BA2AC"
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Quick info L1 */}
        <View style={styles.lineSpotlight}>
          <View style={styles.areaSpotlight}>
            <Text style={styles.textTitleSpotlight}>Age</Text>
            <Text style={styles.textSpotlight}>{caseInfo.age}</Text>
          </View>

          <View style={styles.areaSpotlight}>
            <Text style={styles.textTitleSpotlight}>Gender</Text>
            <Text style={styles.textSpotlight}>{caseInfo.gender}</Text>
          </View>
        </View>

        {/* Quick info L2 */}
        <View style={styles.lineSpotlight}>
          <View style={styles.areaSpotlight}>
            <Text style={styles.textTitleSpotlight}>Height</Text>
            <Text style={styles.textSpotlight}>{caseInfo.height}</Text>
          </View>

          <View style={styles.areaSpotlight}>
            <Text style={styles.textTitleSpotlight}>Hair color</Text>
            <Text style={styles.textSpotlight}>{caseInfo.hairColor}</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.areaDesciption}>
          <Text style={styles.textTitleDescription}>Last known outfit</Text>
          <Text style={styles.textDescription}>{caseInfo.lastKnownOufit}</Text>
        </View>

        <View style={styles.areaDesciption}>
          <Text style={styles.textTitleDescription}>Context and comments</Text>
          <Text style={styles.textDescription}>{caseInfo.context}</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

CaseInfo.propTypes = {
  caseInfo: PropTypes.object,
  onClickCloseMoreInfo: PropTypes.func
};

CaseInfo.defaultProps = {
  caseInfo: {},
  onClickCloseMoreInfo: () => {}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1F2F2'
  },

  contentContainer: {
    paddingVertical: 10
  },

  lineSpotlight: {
    flex: 1,
    flexDirection: 'row'
  },

  textTitleSpotlight: {
    paddingVertical: 4,
    fontSize: 16,
    color: '#808080'
  },

  textTitleDescription: {
    paddingVertical: 7,
    fontSize: 16,
    color: '#808080'
  },

  areaSpotlight: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    width: '50%'
    // backgroundColor: '#ffffff'
  },

  areaDesciption: {
    paddingHorizontal: 30,
    paddingVertical: 18,
    width: '100%'
    // backgroundColor: '#ffffff'
  },

  textSpotlight: {
    fontSize: 36,
    color: '#4BA2AC'
  },

  textDescription: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4BA2AC',
    textAlign: 'justify'
  }
});

export default CaseInfo;
