// for improved error handling
'use strict';
import React from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';
import EntryList from './EntryList.js'

var FeaturedTab = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Featured Entlies',
          component: EntryList
        }} />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = FeaturedTab;