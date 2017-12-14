import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

const itemHorizontalMargin = 8;

const CaseCard = ({ caseInfo, onTapCard }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.cardContainer}
      onPress={() => onTapCard(caseInfo)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: caseInfo.imgUrls[0] }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.line}>
          <Icon type="font-awesome" name="user" size={20} />
          <Text style={styles.caseInfoText}> {caseInfo.name}</Text>
        </View>
        <View style={styles.line}>
          <Icon type="font-awesome" name="map-marker" size={20} />
          <Text style={styles.caseInfoText}>
            {'  '}
            {caseInfo.lastKnownLoc.city}, {caseInfo.lastKnownLoc.country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: viewportWidth / 2.2,
    height: 225,
    paddingRight: itemHorizontalMargin * 2
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center'
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 3
  },
  header: {
    marginTop: 10,
    color: '#f1f2f2'
  },
  line: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center'
  },
  caseInfoText: {
    fontSize: 12
  }
});

CaseCard.propTypes = {
  caseInfo: PropTypes.object.isRequired,
  onTapCard: PropTypes.func
};

CaseCard.defaultProps = {
  onTapCard: () => {}
};

export default CaseCard;
