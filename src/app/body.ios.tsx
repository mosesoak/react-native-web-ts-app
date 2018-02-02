import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { IBodyProps } from './bodyType';

export default class Body extends Component<IBodyProps> {
  render() {
    return (
      <Text style={styles.intro}>
        Dot iOS File
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  intro: {
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
});
