import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';  // middleware

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAUydpoxIu3V3jdcUf_Rq8_Cyyknk2H8XU',
      authDomain: 'manager-1c4ff.firebaseapp.com',
      databaseURL: 'https://manager-1c4ff.firebaseio.com',
      storageBucket: 'manager-1c4ff.appspot.com',
      messagingSenderId: '497391849723'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      // boilerplate
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
