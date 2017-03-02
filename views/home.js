import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Swiper from 'react-native-swiper';

import LoopImg from './common/loopimg';
import SearchBar from './common/searchbar';
import Banner from './common/banner';
import RecommendJob from './job/recommend';
import JobList from './job/joblist';

const IMG_URI = ['../imgs/splash.png', '../imgs/splash.png', '../imgs/splash.png'];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0
    }
  }

  onScroll(e) {
    let h = e.nativeEvent.contentOffset.y;
    let opa = this.state.opacity;
    if ((h > 100 && opa === 1) || (h < -20 && opa === 0)) return;

    opa = h < 0 ? 0 : (parseInt(h, 10) / 100);

    if (h > 100 && opa !== 1) {
      opa = 1;
    }

    if (h < -20 && opa !== 0) {
      opa === 0;
    }
    this.setState({
      opacity: opa
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar opacity={this.state.opacity} />
        <ScrollView
          style={{marginTop: -20}}
          onScroll={this.onScroll.bind(this)}
          scrollEventThrottle={100}>
          <LoopImg />
          <Banner />
          <RecommendJob />
          <JobList />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  img: {
    width: 400
  }
});
