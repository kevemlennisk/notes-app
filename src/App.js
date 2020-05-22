import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainDrawerWithStack from './routes/MainDrawerWithStack';

enableScreens();

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainDrawerWithStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
