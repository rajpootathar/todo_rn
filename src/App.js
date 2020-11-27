import {enableScreens} from 'react-native-screens';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '~redux';
import Navigation from '~navigation';
import {NavigationContainer} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import ErrorBoundary from './errorBoundry';

enableScreens();

export default function App() {
  Orientation.lockToPortrait();
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}
