import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import Topic from '../views/topic';

export default class RouteMessage extends Component {

  _renderScene = (route, navigator) => {
    let Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  render() {

    let defaultName = 'topicpage';
    let component = Topic;
    return (
      <Navigator
        initialRoute={{name: defaultName, component: component}}
        renderScene={this._renderScene}
      />
    );
  }
}
