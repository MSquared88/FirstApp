import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>
          Here are some boxes of diffrent colors
        </Text>
      </View>
      <View>
        <Text style={[styles.text, styles.cyan]}>Cyan #2aa198</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.blue]}>blue #268bd2</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.magenta]}>magenta #d33682</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.orange]}>orange #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'left',
    width: 350,
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'gray',
    borderColor: 'green',
    paddingVertical: 5,
    width: 350,
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});
