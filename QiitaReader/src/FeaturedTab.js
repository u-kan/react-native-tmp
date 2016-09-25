// for improved error handling
'use strict';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

var FeaturedTab = React.createClass({
  render: function() {
    return <View style={styles.container}>
        <Text style={styles.description}>this is featured tab</Text>
      </View>
    
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 15,
    backgroundColor: '#FFFFFF'
  }
});

module.exports = FeaturedTab;