import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar
} from 'react-native';

import Main from './main';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // 欢迎界面载入后进入首页
    const { navigator } = this.props;

    setTimeout(() => {
      navigator.replace({
        name: 'main',
        component: Main
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image source={require('../imgs/splash.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
