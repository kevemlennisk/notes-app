import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NewNoteScreen from '../screens/NewNoteScreen';
import ListNotesScreen from '../screens/ListNotesScreen';
import {ThemeContext} from 'styled-components';

const Stack = createStackNavigator();

export default () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Stack.Navigator initialRouteName="ListNotesScreen">
      <Stack.Screen
        options={{...themeContext.stackHeader}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{...themeContext.stackHeader}}
        name="NewNoteScreen"
        component={NewNoteScreen}
      />
      <Stack.Screen
        options={{...themeContext.stackHeader}}
        name="ListNotesScreen"
        component={ListNotesScreen}
      />
    </Stack.Navigator>
  );
};
