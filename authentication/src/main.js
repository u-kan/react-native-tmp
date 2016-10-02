import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Signin from './components/authentication/singin';


module.exports = React.createClass({
  render: function() {
    return(
      <View style={styles.container}>
        <Signin />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});