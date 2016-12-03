'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ListView,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import EntryDetail from './EntryDetail.js';

var QIITA_REACTJS_ENTRY_URL = 'https://qiita.com/api/v2/tags/reactjs/items';

var EntryList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      isLoaded: false
    };
  },
  fetchData: function() {
    fetch(QIITA_REACTJS_ENTRY_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          isLoaded: true
        });
      })
      .done();
  },
  componentDidMount: function() {
    this.fetchData();
  },
  renderEntry: function(entry) {
    return(
      <TouchableHighlight
        underlayColor='#0000'
        onPress={() => this.onPressed(entry)}>
        <View>
          <View style={styles.container}>
            <Image
              style={styles.thumbnail}
              source={{uri: 'entry.user.profile_image_url'}} />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{entry.title}</Text>
              <Text style={styles.name}>{entry.user.id}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  },
  onPressed: function(entry) {
    this.props.navigator.push({
      title: entry.title,
      component: EntryDetail,
      passProps: {url: entry.url}
    })
  },
  viewLoadingData: function() {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator
          animating={true}
          size={'large'}
        />
        <View>
          <Text style={styles.loadingMessage}>
            Please wait a second ... 
          </Text>
        </View>
      </View>
    );
  },
  render: function() {
    /*
      はじめにviewLoadingDataが呼び出されて、その後ListView
      はじめはちゃんとNavigationBarの分margin空いてるが
      ListViewの時にはその分が消されてしまう
    */
    if(this.state.isLoaded){  
      return (
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderEntry}
        />
      );
    } else {
      return (
        this.viewLoadingData()
      );
    };
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8
  },
  name: {
    color: '#656565'
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  listView: {
    backgroundColor: '#F5FCFF'
  },
  activityIndicator: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingMessage: {
    flex: 1,
    fontSize: 20,
    color: '#656565'
  }
});

module.exports = EntryList;