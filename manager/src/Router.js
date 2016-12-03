import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    // padding top は帰る必要あり
    // 何も設定されていなければ上から順番に呼び出される
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Please Login' />
      </Scene>
      <Scene key='main'>
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle='Add'
          key='employeeList'
          component={EmployeeList}
          title='Employees'
          initial
        />
        <Scene
          key='employeeCreate'
          component={EmployeeCreate}
          title='Create Employee'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
