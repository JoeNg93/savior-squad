import React from 'react';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import { viewportWidth } from '../utils';

const Slider = ({ items, renderItem }) => {
  return (
    <Carousel
      data={items}
      renderItem={renderItem}
      activeSlideAlignment="start"
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth / 2.2}
      firstItem={0}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      enableMomentum={true}
      decelerationRate={0.9}
    />
  )
};

Slider.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
};

export default Slider;