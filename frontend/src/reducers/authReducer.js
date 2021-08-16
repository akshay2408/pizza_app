import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  REDIRECTED,
  LOGOUT_SUCCESS,
} from '../actions/actionTypes';

const registerReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { success: true });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { success: false });
    case REDIRECTED:
      return Object.assign({}, state, { success: false });
    default:
      return state;
  }
};

const loginReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { success: true });
    case REDIRECTED:
      return Object.assign({}, state, { success: false });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, { success: false });
    default:
      return state;
  }
};

const registerErrorReducer = (
  state = { hasError: false, message: '' },
  action
) => {
  switch (action.type) {
    case REGISTER_ERROR:
      return Object.assign({}, state, {
        hasError: true,
        message: action.error,
      });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { hasError: false, message: '' });
    default:
      return state;
  }
};

const loginErrorReducer = (
  state = { hasError: false, message: '' },
  action
) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        hasError: true,
        message: action.error,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { hasError: false, message: '' });
    default:
      return state;
  }
};

export {
  registerReducer,
  loginReducer,
  registerErrorReducer,
  loginErrorReducer,
};
