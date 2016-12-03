import React, { Component } from 'react';
import { Text } from 'react-native'
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
} from '../actions'; // これはaction creator。actionsの下でarrayを返すようにして登録する
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  //event handler as a method
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() { 
    const {email, password} = this.props;
    console.log('onButtonPress is called');
    this.props.loginUser({ email, password });
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)} // ２番
            value={this.props.email}
          />          
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='password'
            placeholder='password'
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
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

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;
  return { email, password, error };
};

// こいつのおかげで、呼ばれた段階で、emailChangedがactioncreatorとして呼ばれる
// 多分、importされる時には既にconnectのおかげでaction creator がpropsに入ってる
// connectの２つの引数の意味
// 1つ目: ここのcomponentで使いたいstateをpropsにする
// 2つ目: componentにbindsいたいactioncreatorをpropsにしてもらう
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
