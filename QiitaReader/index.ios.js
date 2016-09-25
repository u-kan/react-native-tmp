'use strict';

import React from 'react';
import {View, TabBarIOS, StyleSheet, AppRegistry} from 'react-native';
import FeaturedTab from './src/FeaturedTab.js';
import SearchTab from './src/SearchTab.js';

var QiitaReader = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'FeaturedTab'
    }
  },
  render: function() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'FeaturedTab'}
          systemIcon='featured'
          onPress={() => {
            this.setState(
              {selectedTab: 'FeaturedTab'}
            );
          }}
        >
          <FeaturedTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'SearchTab'}
          systemIcon='search'
          onPress={() => {
            this.setState(
              {selectedTab: 'SearchTab'}
            );
          }}
        >
          <SearchTab />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

// set stylesheet
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// to show component
AppRegistry.registerComponent('QiitaReader', () => QiitaReader);










