import React from 'react';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import {Section} from '..';

const Loading = ({isVisible}) => (
  <Modal
    animationInTiming={1}
    animationOutTiming={1}
    useNativeDriver={true}
    hasBackdrop={false}
    hideModalContentWhileAnimating={true}
    visible={isVisible}
    style={{backgroundColor: 'transparent'}}
    supportedOrientations={['portrait']}
    onRequestClose={() => {}}>
    <Section
      flex={false}
      style={{
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FastImage
        style={{
          width: 55,
          height: 55,
        }}
        source={require('../../assets/images/balls.gif')}
      />
    </Section>
  </Modal>
);
export default Loading;
