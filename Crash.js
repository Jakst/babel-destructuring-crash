import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Crash extends React.Component {
  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <Text>If you see this, the app didn't crash.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
