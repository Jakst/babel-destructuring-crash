import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Crash from './Crash';

export default class App extends React.Component {
  state = {
    clicked: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Button title="Crash it" onPress={() => this.setState({clicked: true})} />

        {this.state.clicked && <Crash />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
