import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

const profileList = [
  {
    name: 'Daisy Duck',
    avatar_url:
      'https://vignette.wikia.nocookie.net/disney/images/f/f3/Daisy_Duck_375.jpg/revision/latest?cb=20131102202354',
    subtitle: 'View my profile'
  }
];

const settingList1 = [
  {
    title: 'Notifications',
    icon: 'notifications'
  },
  {
    title: 'Settings',
    icon: 'settings'
  },
  {
    title: 'Contact us',
    icon: 'forum'
  }
];

const settingList2 = [
  {
    title: 'Log out',
    icon: 'power-settings-new'
  }
];

const ProfileScreen = ({ onPressLogout }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <List containerStyle={{ marginTop: 50 }}>
          {profileList.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: l.avatar_url }}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
              onPress={() => {}}
            />
          ))}
        </List>
        <List>
          {settingList1.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              onPress={() => {}}
            />
          ))}
        </List>
        <List>
          {settingList2.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              titleStyle={{ color: '#cd3838', fontSize: 18 }}
              leftIcon={{ name: item.icon }}
              onPress={onPressLogout}
            />
          ))}
        </List>
      </ScrollView>
    </View>
  );
};

ProfileScreen.propTypes = {
  onPressLogout: PropTypes.func
};

ProfileScreen.defaultProps = {
  onPressLogout: () => {}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1F2F2'
  },

  contentContainer: {
    paddingVertical: 20
  },

  contents: {
    marginTop: 50
  }
});

export default ProfileScreen;
