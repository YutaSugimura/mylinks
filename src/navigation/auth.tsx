import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/auth';

export type AuthStackParamList = {
  AuthTop: undefined;
};

export type AuthStackScreen = keyof AuthStackParamList;
export type AuthStackNavigationProp<T extends AuthStackScreen> = NavigationProp<
  AuthStackParamList,
  T
>;
export type AuthStackRouteProp<T extends AuthStackScreen> = RouteProp<AuthStackParamList, T>;

const RootStack = createStackNavigator<AuthStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <RootStack.Navigator initialRouteName="AuthTop">
      <RootStack.Screen name="AuthTop" component={AuthScreen} />
    </RootStack.Navigator>
  );
};

export default Navigation;
