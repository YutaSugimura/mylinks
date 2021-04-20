import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './auth';
import AppStack from './app';

export type RootParamList = {
  Auth: undefined;
  App: undefined;
};

export type RootScreen = keyof RootParamList;
export type RootNavigationProp<T extends RootScreen> = NavigationProp<RootParamList, T>;
export type RootRouteProp<T extends RootScreen> = RouteProp<RootParamList, T>;

const RootStack = createStackNavigator<RootParamList>();

const Navigation: React.VFC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Auth" component={AuthStack} />
      <RootStack.Screen name="App" component={AppStack} />
    </RootStack.Navigator>
  );
};

export default Navigation;
