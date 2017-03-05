import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.desc}>
          <Image style={{width: 60, height: 60, backgroundColor: '#fff', borderRadius: 30, marginBottom: 10}} />
          <Text style={{fontSize: 16, color: '#fff', fontWeight: '600', marginBottom: 5}}>weels</Text>
          <Text style={{color: 'rgba(255,255,255, 0.5)', fontSize: 12}}>三年工作经验,独立完成过项目前端部分,善于主动学习...</Text>
        </View>
        <View style={styles.profile}>
          <View style={styles.item}>
            <View>
              <Text style={{color: '#666'}}><Icon name='file-text-o'/> <Text>  简历</Text></Text>
            </View>
            <View style={{marginRight: 20}}>
              <Text style={{color: '#999', fontSize: 12}}>完成度 73% <Icon name='angle-right' /></Text>
            </View>
          </View>
          <View style={styles.item}>
            <View>
              <Text style={{color: '#666'}}><Icon name='download'/>   机会+</Text>
            </View>
            <View style={{marginRight: 20}}>
              <Text style={{color: '#999', fontSize: 12}}>设置隐私保护 <Icon name='angle-right' /></Text>
            </View>
          </View>
        </View>
        <View style={styles.meta}>
        <View style={styles.item}>
          <View>
            <Text style={{color: '#666'}}><Icon name='star'/> <Text>  收藏</Text></Text>
          </View>
          <View style={{marginRight: 20}}>
            <Text style={{color: '#999', fontSize: 12}}><Icon name='angle-right' /></Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Text style={{color: '#666'}}><Icon name='pencil-square-o'/>   意见反馈</Text>
          </View>
          <View style={{marginRight: 20}}>
            <Text style={{color: '#999', fontSize: 12}}><Icon name='angle-right' /></Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Text style={{color: '#666'}}><Icon name='cog'/>   设置</Text>
          </View>
          <View style={{marginRight: 20}}>
            <Text style={{color: '#999', fontSize: 12}}><Icon name='angle-right' /></Text>
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
    backgroundColor: '#fafafa',
  },
  desc: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b38a',
    height: 200
  },
  profile: {
    paddingLeft: 10,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60
  },
  meta: {
    paddingLeft: 10,
    backgroundColor: '#fff',
  }
});
