/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootStack from './src/navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
