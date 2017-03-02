import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import Message from '../views/message';

export default class RouteMessage extends Component {

  _renderScene = (route, navigator) => {
    let Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  render() {

    let defaultName = 'messagepage';
    let component = Message;
    return (
      <Navigator
        initialRoute={{name: defaultName, component: component}}
        renderScene={this._renderScene}
      />
    );
  }
}
