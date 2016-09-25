// to use improved error handling
'use strict';

import React from 'react';
import {NavigatorIOS, StyleSheet} from 'react-native';
import SearchEntry from './SearchEntry.js';

var SearchTab = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Search Entlies',
          component: SearchEntry
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// To enable this
module.exports = SearchTab