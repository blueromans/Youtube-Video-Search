import React from 'react';
import {Text} from 'react-native';
import {Section} from '..';

const EmptyComponent = ({emptyMessage}) => {
  return (
    <Section center middle p20>
      <Text>{emptyMessage}</Text>
    </Section>
  );
};
export default EmptyComponent;
