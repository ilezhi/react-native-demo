import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  ListView
} from 'react-native';

import JobItem from './jobitem';

const jobData = [
  {
    id: 1,
    pic: 'https://www.lgstatic.com/thumbnail_160x160/i/image/M00/61/D3/CgqKkVf8uQeAOqJ2AAArfl5skXY149.png',
    position: 'web前端',
    salary: '12-24k',
    company: '有鱼金融科技',
    location: '上海 徐汇区',
    experience: '3-5年',
    edu: '大专及以上',
    issue: '03月01日',
    extra: 'B轮',
    scale: '150-500',
    nature: '移动互联网,金融'
  },
  {
    id: 2,
    pic: 'https://www.lgstatic.com/thumbnail_160x160/i/image/M00/5B/62/CgqKkVfg666AbERHAACgQ6wZES4852.JPG',
    position: 'web前端[东明路]',
    salary: '13-25k',
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
    pic: 'https://www.lgstatic.com/thumbnail_160x160/i/image/M00/02/EA/CgqKkVagn12AMfwJAAAWqXkpOFo898.png',
    position: 'web前端工程师',
    salary: '10-25k',
    company: 'ezbuy',
    location: '上海 浦东新区',
    experience: '1-3年',
    edu: '本科',
    issue: '03月01日',
    extra: 'C轮',
    scale: '500-2000人',
    nature: '电子商务,生活服务'
  },
  {
    id: 3,
    pic: 'https://www.lgstatic.com/thumbnail_160x160/image1/M00/00/62/Cgo8PFTUXVWAd8BIAAB0tv_Fb14520.jpg',
    position: 'web前端工程师[世纪公园]',
    salary: '15-30k',
    company: '现金巴士',
    location: '上海 浦东新区',
    experience: '1-3年',
    edu: '本科及以上',
    issue: '03月01日',
    extra: 'B轮',
    scale: '50-150人',
    nature: '移动互联网,金融'
  },

];

export default class JobList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(jobData)
    }
  }

  goJobDetail(job) {
    console.log('click', job.id);
    this.props.onJobDetail(job);
  }


  _renderJob(job) {
    return (<JobItem job={job} onSelectJob={this.goJobDetail.bind(this, job)} />);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderJob.bind(this)}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff'
  }
});
