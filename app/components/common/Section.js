import React from 'react';
import {View} from 'react-native';

import styles from '../../styles/Section.style';

const Section = (props) => {
  const {
    flex,
    safeView = false,
    scroll = false,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    space,
    style,
    children,
    p5,
    p10,
    p15,
    p20,
    ph10,
    ph15,
    ph20,
    ph25,
    ph30,
    pv10,
    pv15,
    pv20,
    pv25,
    mh10,
    mh15,
    mh20,
    mh25,
    mv5,
    mb,
    mt,
    mv10,
    mv15,
    mv20,
    mv25,
    mb5,
    mb10,
    mb20,
    mb30,
    full,
    footerTransparent,
    ...rest
  } = props;

  const blockStyles = [
    styles.block,
    flex && {flex},
    flex === false && {flex: 0}, // reset / disable flex
    p5 && styles.p5,
    p10 && styles.p10,
    p15 && styles.p15,
    p20 && styles.p20,
    ph10 && styles.ph10,
    ph15 && styles.ph15,
    ph20 && styles.ph20,
    ph25 && styles.ph25,
    ph30 && styles.ph30,
    pv10 && styles.pv10,
    pv15 && styles.pv15,
    pv20 && styles.pv20,
    pv25 && styles.pv25,
    mh10 && styles.mh10,
    mh15 && styles.mh15,
    mh20 && styles.mh20,
    mh25 && styles.mh25,
    mv5 && styles.mv5,
    mv10 && styles.mv10,
    mv15 && styles.mv15,
    mv20 && styles.mv20,
    mv25 && styles.mv25,
    mb5 && styles.mb5,
    mb10 && styles.mb10,
    mb20 && styles.mb20,
    mb30 && styles.mb30,
    row && styles.row,
    footerTransparent && styles.footerTransparent,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    shadow && styles.shadow,
    full && styles.full,
    space && {justifyContent: `space-${space}`},
    mb && {marginBottom: mb},
    mt && {marginTop: mt},
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
    style, // rewrite predefined styles
  ];
  return (
    <View style={blockStyles} {...rest}>
      {children}
    </View>
  );
};
export default Section;
