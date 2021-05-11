import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {LogBox, StatusBar} from 'react-native';
import {AppNavigation} from './navigation';
import store from './configureStore';
import {Section} from './components';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

enableScreens();
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Section>
        <StatusBar />
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Section>
    </Provider>
  );
};

export default App;
