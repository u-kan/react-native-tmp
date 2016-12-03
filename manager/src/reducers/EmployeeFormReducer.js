import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // [ ... ] is not array, but ES6 syntax to show key
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}
