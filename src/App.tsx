/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import NavigationRoute from './navigation';

type Props = {};

const App: React.VFC<Props> = () => {
  return (
    <NavigationContainer>
      <NavigationRoute />
    </NavigationContainer>
  );
};

export default App;
