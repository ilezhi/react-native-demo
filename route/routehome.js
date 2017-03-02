import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import Home from '../views/home';

export default class RouteHome extends Component {

  _renderScene = (route, navigator) => {
    let Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  render() {

    let defaultName = 'homepage';
    let component = Home;
    return (
      <Navigator
        initialRoute={{name: defaultName, component: component}}
        renderScene={this._renderScene}
      />
    );
  }
}
