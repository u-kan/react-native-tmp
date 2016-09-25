'use strict';

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

var SearchEntry = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          this is a search entry componetn
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    backgroundColor: '#FFFFFF'
  }
});

module.exports = SearchEntry