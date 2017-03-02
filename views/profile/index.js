import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>this is profile page.</Text>
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
