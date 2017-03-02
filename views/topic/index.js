import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

export default class Topic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>this is topic page.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
