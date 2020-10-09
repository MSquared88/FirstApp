import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Color Palette');
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
