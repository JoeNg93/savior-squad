import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'nachos-ui';
import { Button, Header, Icon } from 'react-native-elements';
import { wp, hp } from '../utils';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ContactScreen = ({
  caseInfo,
  subjectValue,
  messageValue,
  onChangeSubjectInput,
  onChangeMessageInput,
  onClickSubmit,
  onClickCloseContactOwner
}) => {
  return (
    <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={onClickCloseContactOwner}>
            <Icon name="close" color="white" />
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'Contact',
          style: { fontSize: 16, color: '#fff' }
        }}
        backgroundColor="#4BA2AC"
      />

      <View style={styles.headerContainerStyle}>
        <Text style={{ color: '#999999', fontSize: 20 }}>About </Text>
        <Text style={{ color: '#4BA2AC', fontWeight: 'bold', fontSize: 20 }}>
          {caseInfo.name}
        </Text>
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
              Note! Your message will be checked by moderators first.
              Inappropriate content such as threats or spam will be dealt with
              accordingly.
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
  onClickSubmit: PropTypes.func,
  caseInfo: PropTypes.object,
  onClickCloseContactOwner: PropTypes.func
};

ContactScreen.defaultProps = {
  onClickSubmit: () => {},
  onClickCloseContactOwner: () => {}
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
    marginTop: hp(2),
    paddingLeft: 16,
    paddingRight: 16
  },
  inputContainerStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  headerContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: hp(3)
  }
});

export default ContactScreen;
