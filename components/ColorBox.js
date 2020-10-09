import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const colorStyle = {
    backgroundColor: colorHex,
  };
  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={styles.text}>
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
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
