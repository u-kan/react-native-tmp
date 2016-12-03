import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '' , password: '', error: '', loading: false};

  onButtonPress() {
    conosole.log('called');
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassWord(email, password)
      console.log('logging in now')
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        console.log('fail login once')
        firebase.auth().createUserWithEmailAndPassword(email, passowrd)
          .then(this.onLoginSuccess.bind(this))
          console.log('fail login twice')
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    console.log('render button');
    if (this.state.loading) {
      console.log('render loading true');
      return <Spinner size="small" />;
    }
    console.log('render loading false');
    return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
    );
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email: email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="password"
            value={this.state.passowrd}
            onChangeText={password => this.setState({ password: password })}
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
