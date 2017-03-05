import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Message extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={{textAlign: 'center', fontSize: 18}}>消息列表</Text>
        </View>
        <View style={styles.statusBar}>
          <View style={styles.item}>
            <View style={styles.imgWrap1}><Icon name='file-text-o' size={30} color='white' /></View>
            <Text style={styles.text}>简历状态</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.imgWrap2}><Icon name='envelope-o' size={30} color='white' /></View>
            <Text style={styles.text}>职位动态</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.imgWrap3}><Icon name='file-text-o' size={30} color='white' /></View>
            <Text style={styles.text}>言职通知</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#fff'}}>
          <View style={styles.listItem}>
            <View style={styles.icoWrap}>
              <View style={styles.circle}><Icon name='eye' size={30} color='white' /></View>
            </View>
            <View style={styles.cont}>
              <Text style={{fontSize: 16, fontWeight: '600', lineHeight: 30}}>谁看过我</Text>
              <Text style={{fontSize: 12, color: '#999'}}>暂无消息</Text>
            </View>
            <View style={{marginRight: 20}}>
              <Icon name='angle-right'/>
            </View>
          </View>
          <View style={styles.listItem}>
            <View style={styles.icoWrap}>
              <View style={styles.circle}><Icon name='eye' size={30} color='white' /></View>
            </View>
            <View style={styles.cont}>
              <Text style={{fontSize: 16, fontWeight: '600', lineHeight: 30}}>谁看过我</Text>
              <Text style={{fontSize: 12, color: '#999'}}>暂无消息</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  topBar: {
    paddingTop: 30,
    height: 60,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fafafa',
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginTop: 60,
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
    backgroundColor: '#ffd700'
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
    backgroundColor: '#00b38a'
  },
  text: {
    fontSize: 12,
    color: '#999'
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icoWrap: {
    width: 60,
    height: 80,
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
  cont: {
    flex: 1,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 10,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#1e90ff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
