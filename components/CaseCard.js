import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const itemHorizontalMargin = 8;

const CaseCard = ({ caseInfo, onTapCard }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Icon name='reddit-alien' type='font-awesome' size={50} color='#f1f2f2'/>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.line}>
          <Icon type='font-awesome' name='user' size={20}/>
          <Text>{' '}Joe</Text>
        </View>
        <View style={styles.line}>
          <Icon type='font-awesome' name='map-marker' size={20}/>
          <Text>{' '}Last known: Oulu</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: viewportWidth / 2.2,
    height: 250,
    paddingRight: itemHorizontalMargin * 2
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F47B5D'
  },
  textContainer: {
    flex: 1,
    padding: 10
  },
  header: {
    marginTop: 10,
    color: '#f1f2f2'
  },
  line: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center'
  }
});

CaseCard.propTypes = {
  caseInfo: PropTypes.object.isRequired,
  opTapCard: PropTypes.func
};

CaseCard.defaultProps = {
  onTapCard: () => {}
};

export default CaseCard;
