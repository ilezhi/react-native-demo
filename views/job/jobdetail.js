import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class JobDetail extends Component {

  goBack() {
    const { navigator } = this.props;

    if (navigator) {
      navigator.pop();
    }
  }

  render() {
    const { job } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.topBar}>
          <View>
            <Icon.Button name='angle-left' style={styles.btnBg} color='#333' onPress={this.goBack.bind(this)} />
          </View>
          <View>
            <Text style={{fontSize: 16,marginLeft: 20, marginTop: 5, color: '#333'}}>职位详情</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon.Button name='share-square-o' style={styles.btnBg} color='#333' />
            <Icon.Button name='star-o' style={styles.btnBg} color='#333' />
          </View>
        </View>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={{fontSize: 16, marginRight: 10}}>{job.position}</Text>
              <Text style={{color: 'orange', fontWeight: '600', fontSize: 14}}>[{job.salary}]</Text>
            </View>
            <View style={styles.desc}>
              <Text style={styles.text}><Icon name='map-marker' />{job.location.slice(0, 2) }</Text>
              <Text style={styles.text}><Icon name='suitcase' />{job.experience }</Text>
              <Text style={styles.text}><Icon name='mortar-board' />{job.edu }</Text>
              <Text style={styles.text}><Icon name='clock-o' />全职</Text>
            </View>
            <View style={{marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10}}>
              <Text style={{fontSize: 12, color: '#999'}}>职位诱惑: 绩效奖金; 年终奖;</Text>
            </View>
            <View style={styles.company}>
              <Image source={{uri: job.pic}} style={{width: 50, height: 50, marginRight: 10}}></Image>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16, marginBottom: 5}}>{job.company}</Text>
                <Text style={{fontSize: 12, color: '#999'}}>{job.extra + '|' + job.scale}</Text>
                <Text style={{fontSize: 12, color: '#999'}}>已有1条面试评价</Text>
              </View>
              <Icon style={{width: 20}} name='angle-right' />
            </View>
          </View>
          <View style={styles.content}>
            <View>
              <Text style={{lineHeight: 40}}><Icon name='file' color='brown' /><Text> 职位描述</Text></Text>
            </View>
            <Text style={{lineHeight: 24, color: '#666'}}>
              <Text>岗位职责:{'\n'}</Text>
              <Text>1.准确理解产品需求,交互文档或原型,进行web产品前端开发;{'\n'}</Text>
              <Text>2.优化用户体验,修正项目中出现的问题;{'\n'}</Text>
              <Text>3.参与交互设计,配合后台开发人员,完成页面的交互功能,联调工作;</Text>
              <Text>4.配合团队整体建设,协助构建优秀的团队开发环境和基础设施;{'\n'}</Text>
              <Text>任职要求:{'\n'}</Text>
              <Text>1.本科及以上学历,计算机相关专业,3年以上前端开发经验;{'\n'}</Text>
              <Text>3.精通前端基本技能,包括HTML/CSS/Javascript/NodeJS等,掌握Web标准,语义化.</Text>
              <Text>4.精通前端基本技能,包括HTML/CSS/Javascript/NodeJS等,掌握Web标准,语义化.</Text>
              <Text>5.精通前端基本技能,包括HTML/CSS/Javascript/NodeJS等,掌握Web标准,语义化.</Text>
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight style={{borderColor: '#00b38a', borderWidth: 1, height: 35, width: 80, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#00b38a'}}>发送简历</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{backgroundColor: '#00b38a', flex: 1, height: 35, justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
            <Text style={{color: '#fff'}}>和TA聊聊</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
  },
  topBar: {
    paddingTop: 30,
    paddingLeft: 10,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fafafa',
    position: 'absolute',
    zIndex: 10,
    top: 0,
    right: 0,
    left: 0
  },
  btnBg: {
    width: 30,
    height: 30,
    backgroundColor: '#fafafa',
    borderColor: '#fff',
    padding: 0,
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 75,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  desc: {
    marginBottom: 7,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#666',
    marginRight: 15
  },
  company: {
    flexDirection: 'row',
    height: 70,
    paddingBottom: 10,
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  footer: {
    height: 60,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
});
