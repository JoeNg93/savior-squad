import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

const wp = percentage => Math.round(percentage * viewportWidth / 100);

const hp = percentage => Math.round(percentage * viewportHeight / 100);

export { viewportWidth, viewportHeight, wp, hp };
