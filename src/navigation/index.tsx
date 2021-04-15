import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SettingScreen from '../screens/setting';

export type TabParamList = {
  Home: undefined;
  Setting: undefined;
};

export type TabScreen = keyof TabParamList;
export type TabNavigationProp<T extends TabScreen> = BottomTabNavigationProp<TabParamList, T>;
export type TabRouteProp<T extends TabScreen> = RouteProp<TabParamList, T>;

const Tab = createBottomTabNavigator<TabParamList>();

const Navigation: React.VFC = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
