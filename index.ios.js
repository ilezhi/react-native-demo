/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  Navigator
} from 'react-native';

import Splash from './views/splash';

export default class ap extends Component {


  _renderScene = (route, navigator) => {
    let Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  render() {

    let defaultName = 'welcomepage';
    let component = Splash;
    return (
      <Navigator
        initialRoute={{name: defaultName, component: component}}
        renderScene={this._renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ap', () => ap);
