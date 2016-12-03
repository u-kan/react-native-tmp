'use strict';

import React from 'react';
import {
  StyleSheet,
  View, 
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

var SearchEntry = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.instructions}>search by tag </Text>
          <View>
            <TextInput style={styles.SearchInput} />
          </View>
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor='#f1c40f'
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    padding: 10
  },
  description: {
    fontSize: 18,
    backgroundColor: '#FFFFFF'
  },
  instructions: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15
  },
  SearchInput: {
    height: 36,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    flex: 1,
    borderRadius: 4,
    padding: 5
  },
  button: {
    height: 36,
    backgroundColor: '#6495ED',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 15
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = SearchEntry