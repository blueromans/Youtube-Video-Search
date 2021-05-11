import React from 'react';
import FastImage from 'react-native-fast-image';

import {Section} from '..';

const ListIndicator = ({visible}) =>
  visible ? (
    <Section flex={false} center middle>
      <FastImage
        style={{
          width: 60,
          height: 60,
        }}
        source={require('../../assets/images/dots.gif')}
      />
    </Section>
  ) : (
    <Section flex={false} style={{height: 1}} />
  );
export default ListIndicator;
