import ajaxStatusReducer from './ajaxStatusReducer';
import statsReducer from './statsReducer';
import cartReducer from './cartReducer';
import { userOrdersReducer, pendingOrdersReducer } from './ordersReducer';
import { productsReducer } from './productsReducer';
import {
  registerReducer,
  loginReducer,
  registerErrorReducer,
  loginErrorReducer,
} from './authReducer';
import { ingredientsReducer } from './ingredientsReducer';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  register: registerReducer,
  login: loginReducer,
  products: productsReducer,
  registerError: registerErrorReducer,
  loginError: loginErrorReducer,
  ajaxCalls: ajaxStatusReducer,
  stats: statsReducer,
  cart: cartReducer,
  userOrders: userOrdersReducer,
  pendingOrders: pendingOrdersReducer,
  ingredient: ingredientsReducer,
};
