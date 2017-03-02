import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import Profile from '../views/profile';

export default class RouteProfile extends Component {

  _renderScene = (route, navigator) => {
    let Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  render() {

    let defaultName = 'profilepage';
    let component = Profile;
    return (
      <Navigator
        initialRoute={{name: defaultName, component: component}}
        renderScene={this._renderScene}
      />
    );
  }
}
