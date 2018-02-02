import React, { Component } from 'react';
const logo = require("./logo.svg");
import { Image, StyleSheet, Text, View, Animated, Easing } from 'react-native';

// see https://github.com/necolas/react-native-web


const blah: string = 1;

class App extends Component {

  val = 0;
  spinValue = new Animated.Value(this.val);
  spinAmount = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  scalePulse = this.spinValue.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: [1, 1.25, 1, 1.5, 1, 1.25]
  });

  componentDidMount() {
    this.spin()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Animated.Image
            accessibilityLabel="React logo"
            source={logo}
            resizeMode="contain"
            style={[
              {
                transform: [
                  { scale: this.scalePulse },
                  { rotate: this.spinAmount },
                ]
              },
              styles.logo,
            ]}
          />
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
  app: {
  },
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