import React from 'react';
import color from 'color';

import {Section} from '..';
import styles from '../../styles/ListItem.style';
import {Text, TouchableHighlight} from 'react-native';

const ListItem = ({
  left,
  right,
  title,
  description,
  onPress,
  theme,
  style,
  titleStyle,
  titleNumberOfLines = 1,
  descriptionNumberOfLines = 2,
  titleEllipsizeMode,
  descriptionEllipsizeMode,
  descriptionStyle,
  ...rest
}) => {
  const titleColor = color('#333').alpha(0.87).rgb().string();
  const descriptionColor = color('#333').alpha(0.54).rgb().string();
  const renderDescription = (descriptionColor, description) => {
    return typeof description === 'function' ? (
      description({
        selectable: false,
        ellipsizeMode: descriptionEllipsizeMode,
        color: descriptionColor,
        fontSize: styles.description.fontSize,
      })
    ) : (
      <Text
        selectable={false}
        numberOfLines={descriptionNumberOfLines}
        ellipsizeMode={descriptionEllipsizeMode}
        style={[
          styles.description,
          {color: descriptionColor},
          descriptionStyle,
        ]}>
        {description}
      </Text>
    );
  };
  const renderTitle = (titleColor, title) => {
    return typeof title === 'function' ? (
      title({
        selectable: false,
        ellipsizeMode: titleEllipsizeMode,
        color: titleColor,
        fontSize: styles.title.fontSize,
      })
    ) : (
      <Text
        selectable={false}
        ellipsizeMode={titleEllipsizeMode}
        numberOfLines={titleNumberOfLines}
        style={[styles.title, {color: titleColor}, titleStyle]}>
        {title}
      </Text>
    );
  };

  return (
    <TouchableHighlight
      {...rest}
      style={[styles.container, style]}
      onPress={onPress}>
      <Section flex={false} row>
        {left
          ? left({
              color: descriptionColor,
              style: description
                ? styles.iconMarginLeft
                : {
                    ...styles.iconMarginLeft,
                    ...styles.marginVerticalNone,
                  },
            })
          : null}
        <Section flex={false} style={[styles.item, styles.content]}>
          {title ? renderTitle(titleColor, title) : null}
          {description
            ? renderDescription(descriptionColor, description)
            : null}
        </Section>
        {right
          ? right({
              color: descriptionColor,
              style: description
                ? styles.iconMarginRight
                : {
                    ...styles.iconMarginRight,
                    ...styles.marginVerticalNone,
                  },
            })
          : null}
      </Section>
    </TouchableHighlight>
  );
};
export default ListItem;
