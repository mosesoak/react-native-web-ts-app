import React, { Component } from 'react';
import logo from './logo.svg';
import { Image, StyleSheet, Text, View } from 'react-native';

// see https://github.com/necolas/react-native-web

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Image accessibilityLabel="React logo" source={logo} resizeMode="contain" style={styles.logo} />
          <Text style={styles.title}>Welcome to React Native Web!</Text>
        </View>
        <Text style={styles.intro}>
          Booyah.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 80
  },
  header: {
    backgroundColor: '#222',
    padding: 20
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  intro: {
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});

export default App;