import React, { Component } from 'react';
import AppIntroScreen from './AppIntroScreen';

class AppIntroScreenContainer extends Component {
  slides = [
    {
      key: 'screen-1',
      backgroundColor: '#2C3E50',
      iconName: 'globe',
      description:
        '"Please find me asap!", Robert said\n' +
        "We're living in the world ruled by internet, but we still are not connected enough to keep ourselves from being lost",
      heading: 'Why?'
    },
    {
      key: 'screen-2',
      backgroundColor: '#4BA2AC',
      iconName: 'search',
      description:
        'Our goal is to rescue some random people that we dont even care. Well, not our, but you!',
      heading: 'Why?'
    },
    {
      key: 'screen-3',
      backgroundColor: '#02C39A',
      iconName: 'vcard-o',
      description:
        'We have many cases about missing persons all around the world. You can follow those cases and, of course, posts your cases if you know someone is missing!',
      heading: 'How?'
    },
    {
      key: 'screen-4',
      iconName: 'calendar',
      backgroundColor: '#003459',
      description:
        'We also help to organize events related to missing people, such as massive finding! You can organize events for a person too!',
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
