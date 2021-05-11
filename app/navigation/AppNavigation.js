import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ListView, MapView} from '../views';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MapView" component={MapView} />
      <Stack.Screen name="ListView" component={ListView} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
