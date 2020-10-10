import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

//componets
import ColorBox from '../components/ColorBox';

export default function ColorPalette({ route }) {
  const { colors } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
