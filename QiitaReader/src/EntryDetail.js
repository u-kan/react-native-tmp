'use strict';

import React from 'react';
import {
  WebView
} from 'react-native';

var EntryDetail = React.createClass({
  render: function() {
    console.log(this.props.url)
    return (
      <WebView
        source={{uri: this.props.url}}
      />
    );
  }
});

module.exports = EntryDetail;