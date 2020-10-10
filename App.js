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
    <NavigationContainer style={styles.nav}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} style={styles.nav} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({
            title: route.params.paletteName,
            headerStyle: styles.header,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'cyan',
  },
});
