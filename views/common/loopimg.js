import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class LoopImg extends Component {
  render() {
    return (
      <Swiper
        height={180}
        autoplay={false}
        dotStyle={{backgroundColor: '#fff', width: 5, height: 5}}
        activeDotStyle={{height: 5, backgroundColor: '#fff'}}>
        <View style={styles.slide}>
          <Image source={require('../../imgs/loop1.jpg')} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../imgs/loop2.jpg')} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../imgs/loop3.jpg')} />
        </View>
      </Swiper>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    backgroundColor: '#0087bd',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
