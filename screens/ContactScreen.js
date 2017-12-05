import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from 'nachos-ui';
import { Button } from 'react-native-elements';
import { wp, hp } from '../utils';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ContactScreen = ({
  userInfo,
  subjectValue,
  messageValue,
  onChangeSubjectInput,
  onChangeMessageInput,
  onClickSubmit
}) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ marginTop: 30 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerStyle}>Contact</Text>
        <Text style={styles.subHeaderStyle}>about Donald Duck</Text>
      </View>
      <View style={styles.formStyle}>
        <View style={styles.inputContainerStyle}>
          <Input
            placeholder="Subject"
            value={subjectValue}
            onChangeText={onChangeSubjectInput}
          />
        </View>
        <View style={styles.inputContainerStyle}>
          <Input
            placeholder="Your message"
            multiline={true}
            numberOfLines={16}
            value={messageValue}
            onChangeText={onChangeMessageInput}
            height={hp(50)}
          />
          <View style={styles.inputContainerStyle}>
            <Text style={{ fontSize: 14, fontStyle: 'italic' }}>
              Note! Your message will be checked by moderators first. Any
              attempt of threating or spamming will be taken needed measures
            </Text>
          </View>
          <View
            style={[
              styles.inputContainerStyle,
              { justifyContent: 'center', alignItems: 'center' }
            ]}
          >
            <Button
              raised
              icon={{ name: 'paper-plane', type: 'font-awesome' }}
              title="SEND"
              buttonStyle={{ backgroundColor: '#4BA2AC' }}
              containerViewStyle={{ width: wp(75) }}
              onPress={onClickSubmit}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

ContactScreen.propTypes = {
  subjectValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  onChangeSubjectInput: PropTypes.func.isRequired,
  onChangeMessageInput: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func
};

ContactScreen.defaultProps = {
  onClickSubmit: () => {}
};

const styles = StyleSheet.create({
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 8
  },
  subHeaderStyle: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  formStyle: {
    marginTop: 22,
    paddingLeft: 16,
    paddingRight: 16
  },
  inputContainerStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  headerContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ContactScreen;
