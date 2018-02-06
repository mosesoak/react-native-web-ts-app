import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ISplitProps } from './split-types';

class Split extends React.Component<ISplitProps, any> {
  render() {
    return (
      <View>
        <Text style={styles.text}>This is iOS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { textAlign: 'center', padding: 20, fontWeight: 'bold' },
});

export default Split;
