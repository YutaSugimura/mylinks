import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/auth';
import SignupScreen from '../screens/auth/signup';
import SigninScreen from '../screens/auth/signin';

export type AuthStackParamList = {
  AuthTop: undefined;
  Signup: undefined;
  Signin: undefined;
};

export type AuthStackScreen = keyof AuthStackParamList;
export type AuthStackNavigationProp<T extends AuthStackScreen> = NavigationProp<
  AuthStackParamList,
  T
>;
export type AuthStackRouteProp<T extends AuthStackScreen> = RouteProp<AuthStackParamList, T>;

const AuthStack = createStackNavigator<AuthStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <AuthStack.Navigator initialRouteName="AuthTop">
      <AuthStack.Screen name="AuthTop" component={AuthScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen name="Signin" component={SigninScreen} />
    </AuthStack.Navigator>
  );
};

export default Navigation;
