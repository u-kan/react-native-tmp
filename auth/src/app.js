import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp ({
      apiKey: 'AIzaSyBQPiPs2DkqoyWEtVYbKTOZRduRR_-jK2Y',
      authDomain: 'auth-9b3f6.firebaseapp.com',
      databaseURL: 'https://auth-9b3f6.firebaseio.com',
      storageBucket: 'auth-9b3f6.appspot.com',
      messagingSenderId: '57428685270'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  } 
}

export default App;
