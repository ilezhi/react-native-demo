import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Banner extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.item}>
          <View style={styles.imgWrap1}><Icon name='file-text-o' size={30} color='white' /></View>
          <Text style={styles.text}>日常任务</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.imgWrap2}><Icon name='youtube-play' size={30} color='white' /></View>
          <Text style={styles.text}>直播LIVE</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.imgWrap3}><Icon name='clock-o' size={30} color='white' /></View>
          <Text style={styles.text}>首发专场</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.imgWrap4}><Icon name='location-arrow' size={30} color='white' /></View>
          <Text style={styles.text}>城市专场</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-around',
    // alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  item: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  imgWrap1: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b38a'
  },
  imgWrap2: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8c00'
  },
  imgWrap3: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff'
  },
  imgWrap4: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd700'
  },
  text: {
    fontSize: 12,
    color: '#999'
  }
})
