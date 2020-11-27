import React from 'react';
import 'react-native-gesture-handler';
import activeScreen from './screens/active';
import completedScreen from './screens/completed';
import {TabBar} from '~containers';

import {constants} from '~common';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = props => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      tabBar={tabProps => <TabBar {...tabProps} />}
      swipeEnabled={true}>
      <BottomTab.Screen
        name={'ActiveTab'}
        component={activeScreen}
        options={{
          icon: constants.icons.clipBoard,
        }}
      />
      <BottomTab.Screen
        name={'CompletedTab'}
        component={completedScreen}
        options={{
          icon: constants.icons.clipBoardCheck,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default App;
