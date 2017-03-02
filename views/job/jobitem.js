import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';


export default class JobItem extends Component {
  render() {
    const { job } = this.props;
    return (
      <View style={styles.wrapper}>
        <Image source={{uri: job.pic}} style={{width: 80, height: 80, marginLeft: 10}} />
        <View style={styles.meta}>
          <View style={styles.title}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>{job.position}</Text>
            <Text style={{color: '#ff8c00'}}>{job.salary}</Text>
          </View>
          <View style={styles.company}>
            <Text>{job.company}</Text>
          </View>
          <View style={styles.requirement}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.text}>{job.location}</Text>
              <Text style={styles.text}>{job.experience}</Text>
              <Text style={styles.text}>{job.edu}</Text>
            </View>
            <Text style={styles.text}>{job.issue}</Text>
          </View>
          <View style={styles.desc}>
            <Text style={styles.text}>{job.extra}</Text>
            <Text style={styles.text}>{job.scale}</Text>
            <Text style={styles.text}>{job.nature}</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  meta: {
    flex: 1,
    marginLeft: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  company: {
    marginBottom: 5
  },
  requirement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  text: {
    color: '#666',
    fontSize: 12,
    marginRight: 3
  },
  desc: {
    flex: 1,
    flexDirection: 'row'
  }
});
