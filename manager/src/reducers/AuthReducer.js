import {
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
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
    
    case LOGIN_USER:
      return { ...state, loading: true}

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '', loading: false, email: '', password: ''
      }
      // 下のやり方がベストなのに、なぜかemailの一文字目が残っちゃう
      // return { ...state, user: action.payload, ...INITIAL_STATE };

    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    
    default:
      return state;
  }
}
