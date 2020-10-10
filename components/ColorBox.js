import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const colorStyle = {
    backgroundColor: colorHex,
  };
  const textStyle = {
    color:
      parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={[styles.text, textStyle]}>
        {colorName + ' '}
        {colorHex}
      </Text>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  box: {
    padding: 5,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
