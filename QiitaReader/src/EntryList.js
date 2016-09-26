'use strict';

import React from 'react';
import {View, Text, StyleSheet, Image, ListView, TouchableHighlight} from 'react-native';

var QIITA_REACTJS_ENTRY_URL = 'https://qiita.com/api/v2/tags/reactjs/items';

var TEST_ENTRY_DATA = [
  {
    user: {
      profile_image_url: 'https://facebook.github.io/react/img/logo_og.png',
      id: 'uchida'
    },
    title: 'React Native Test!1'
  },
  {
    user: {
      profile_image_url: 'https://facebook.github.io/react/img/logo_og.png',
      id: 'uchida2'
    },
    title: 'React Native Test!2'
  }  
];

var entries = TEST_ENTRY_DATA;

var EntryList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      })
    };
  },
  fetchData: function() {
    fetch(QIITA_REACTJS_ENTRY_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        });
      })
      .done();
  },
  componentDidMount: function() {
    this.fetchData();
  },
  renderEntry: function(entry) {
    return(
      <TouchableHighlight>
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
  render: function() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderEntry}
      />
    );
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
});

module.exports = EntryList;