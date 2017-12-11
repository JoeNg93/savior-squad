import React, { Component } from 'react';
import AppIntroScreen from './AppIntroScreen';

class AppIntroScreenContainer extends Component {
  slides = [
    {
      key: 'screen-1',
      backgroundColor: '#2C3E50',
      iconName: 'globe',
      description:
        "We are living in the 'connected' world but we have lost the connection to the people around us.",
      heading: 'Why?'
    },
    {
      key: 'screen-2',
      backgroundColor: '#4BA2AC',
      iconName: 'search',
      description:
        'Our goal is to bring community members together in order to help locate missing persons.',
      heading: 'Why?'
    },
    {
      key: 'screen-3',
      backgroundColor: '#02C39A',
      iconName: 'vcard-o',
      description:
        'There are thousands of missing person cases all around the world. You can follow those cases and, of course, post your own case if you know someone that is missing!',
      heading: 'How?'
    },
    {
      key: 'screen-4',
      iconName: 'calendar',
      backgroundColor: '#003459',
      description:
        'We provide a platform for you to organize or participate in events, such as a search party, to help find these people. Welcome to the Savior Squad!',
      heading: 'How?'
    }
  ];

  render() {
    return (
      <AppIntroScreen
        slides={this.slides}
        onDone={() => this.props.navigation.navigate('loginContainer')}
      />
    );
  }
}

export default AppIntroScreenContainer;
