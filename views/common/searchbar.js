import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Animated,
  Easing,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bg = {
      backgroundColor: `rgba(0, 179, 138, ${this.props.opacity})`,
      paddingTop: 30,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'row',
      position: 'absolute',
      zIndex: 10,
    }

    return (
      <View style={bg}>
        <View style={styles.searchInput}>
          <Icon name="search" color="#ccc" />
          <Text style={styles.searchText}>搜索职位/公司/商区</Text>
        </View>
        <Icon size={30} color='white' name="minus-square-o" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 179, 138, 0)',
    paddingTop: 30,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 10,
  },
  searchInput: {
    flexGrow: 1,
    height: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    marginRight: 10,
  },
  searchText: {
    color: '#ccc'
  }
});
