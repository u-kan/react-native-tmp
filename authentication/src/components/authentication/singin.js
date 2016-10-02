import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Signin</Text>
        <Text style={styles.label}>UserName</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} />
        <Button text={'Sign In'} onPress={this.onPress} />
      </View>
    );
  },
  onPress: function() {
    // log the user in
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  }
});