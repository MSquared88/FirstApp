import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//components
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Color Palette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
