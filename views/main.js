import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TabBarIOS,
  StyleSheet,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './home';
import Message from './message';
import Topic from './topic';
import Profile from './profile';

const HOME_TAB = 'homeTab';
const MESSAGE_TAB = 'messageTab';
const TOPIC_TAB = 'topicTab';
const PROFILE_TAB = 'profileTab';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
      notifCount: 0,
      presses: 0,
    };
  }


  _changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }

  _renderTabPage(pageName) {
    let page;
    switch(pageName) {
      case HOME_TAB:
        page = <Home {...this.props} />;
        break;
      case MESSAGE_TAB:
        page = <Message {...this.props} />;
        break;
      case TOPIC_TAB:
        page = <Topic {...this.props} />;
        break;
      default:
        page = <Profile {...this.props} />;
        break;
    }

    return (
      <View style={styles.container}>
        {page}
      </View>
    );
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <View style={styles.container}>
        <TabBarIOS
        tintColor='#00b38a'
        barTintColor='#fff'>
          <Icon.TabBarItem
            title='首页'
            iconName='home'
            selected={selectedTab === HOME_TAB}
            onPress={this._changeTab.bind(this, HOME_TAB)}>
            {this._renderTabPage(HOME_TAB)}
          </Icon.TabBarItem>
          <Icon.TabBarItem
            title='消息'
            iconName='commenting-o'
            selected={selectedTab === MESSAGE_TAB}
            onPress={this._changeTab.bind(this, MESSAGE_TAB)}>
            {this._renderTabPage(MESSAGE_TAB)}
          </Icon.TabBarItem>
          <Icon.TabBarItem
            title='言职'
            iconName='file-text-o'
            selected={selectedTab === TOPIC_TAB}
            onPress={this._changeTab.bind(this, TOPIC_TAB)}>
            {this._renderTabPage(TOPIC_TAB)}
          </Icon.TabBarItem>
          <Icon.TabBarItem
            title='我'
            iconName='smile-o'
            selected={selectedTab === PROFILE_TAB}
            onPress={this._changeTab.bind(this, PROFILE_TAB)}>
            {this._renderTabPage(PROFILE_TAB)}
          </Icon.TabBarItem>
        </TabBarIOS>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
