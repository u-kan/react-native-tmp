// 認証作業を全て行うreducer
import {
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state=INITIAL_STATE, action) => {
  
  switch (action.type) {

    case EMAIL_CHANGED:
      state.email = action.payload;
      // brand new state だから、ややこしいことなくcomponentが再描画
      return { ...state, email: action.payload };
    
    case PASSWORD_CHANGED:
      state.password = action.payload;
      return { ...state, password: action.payload };
    
    case LOGIN_USER_SUCCESS:

      return { ...state, user: aciton.payload, error: '' };

    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '' };
    
    default:
      return state;
  }
}
