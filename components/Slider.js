import React from 'react';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import { viewportWidth } from '../utils';

const Slider = ({
  items,
  renderItem,
  activeSlideAlignment,
  sliderWidth,
  itemWidth,
  firstItem,
  inactiveSlideScale,
  inactiveSlideOpacity,
  onSlideToItem,
  onLoadCarousel
}) => {
  return (
    <Carousel
      data={items}
      ref={onLoadCarousel}
      renderItem={renderItem}
      activeSlideAlignment={activeSlideAlignment}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      firstItem={firstItem}
      inactiveSlideScale={inactiveSlideScale}
      inactiveSlideOpacity={inactiveSlideOpacity}
      enableMomentum={true}
      decelerationRate={0.9}
      onSnapToItem={onSlideToItem}
    />
  );
};

Slider.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  activeSlideAlignment: PropTypes.string,
  sliderWidth: PropTypes.number,
  itemWidth: PropTypes.number,
  firstItem: PropTypes.number,
  inactiveSlideScale: PropTypes.number,
  inactiveSlideOpacity: PropTypes.number,
  onSlideToItem: PropTypes.func,
  onLoadCarousel: PropTypes.func
};

Slider.defaultProps = {
  activeSlideAlignment: 'start',
  sliderWidth: viewportWidth,
  itemWidth: viewportWidth / 2.2,
  firstItem: 0,
  inactiveSlideScale: 1,
  inactiveSlideOpacity: 1,
  onSlideToItem: () => {},
  onLoadCarousel: () => {}
};

export default Slider;
