import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import JobItem from './jobitem';


const jobItem = [
  {
    id: 1,
    pic: 'https://www.lgstatic.com/thumbnail_160x160/i/image/M00/59/09/CgqKkVfWfJqAbxmRAABgcouK9NQ952.png',
    position: 'web前端工程师',
    salary: '10-20k',
    company: '途牛',
    location: '上海 闸北区',
    experience: '3-5年',
    edu: '本科',
    issue: '03月01日',
    extra: '上市公司',
    scale: '2000人以上',
    nature: '电子商务,旅游'
  },
  {
    id: 2,
    pic: 'https://www.lgstatic.com/thumbnail_160x160/i/image/M00/5B/62/CgqKkVfg666AbERHAACgQ6wZES4852.JPG',
    position: 'web前端',
    salary: '10-25k',
    company: '华云数据',
    location: '上海 杨浦区',
    experience: '5-10年',
    edu: '本科',
    issue: '03月01日',
    extra: 'C轮',
    scale: '500-2000人',
    nature: '移动互联网,数据服务'
  },
  {
    id: 3,
    pic: 'https://www.lgstatic.com/thumbnail_160x160/image1/M00/00/0D/CgYXBlTUWCGADOqxAAEFL-txmvQ442.jpg',
    position: 'web前端工程师',
    salary: '10-25k',
    company: '2345.com',
    location: '上海 浦东新区',
    experience: '3-5年',
    edu: '本科',
    issue: '03月01日',
    extra: '上市公司',
    scale: '500-2000人',
    nature: '移动互联网,数据服务'
  },
  {
    id: 3,
    pic: 'https://www.lgstatic.com/thumbnail_160x160/image1/M00/34/CE/Cgo8PFWZ7WOAVVadAADT-zURktk743.png',
    position: 'web前端工程师',
    salary: '25-35k',
    company: '国槐金融',
    location: '上海 浦东新区',
    experience: '5-10年',
    edu: '本科及以上',
    issue: '03月01日',
    extra: 'B轮',
    scale: '50-150人',
    nature: '移动互联网,数据服务'
  },

];


export default class RecommendJob extends Component {

  _renderRecommendJob() {
    return jobItem.map((job, i) => (
      <JobItem key={i} job={job} />
    ));
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Text style={{lineHeight: 40}}>为你推荐的好职位</Text>
        </View>
        <View>
          {this._renderRecommendJob()}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    marginBottom: 10
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginLeft: 10,
  }
});
