import {
  ADD_TO_CART,
  SYNC_CART,
  REMOVE_FROM_CART,
  SUBMIT_ORDER,
} from '../actions/actionTypes';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let product = state.find((p) => p.id === action.id);
      if (product) {
        return state;
      }
      let newState = state.slice();
      newState.push({ id: action.id, quantity: 1, ingredients: action.option });
      return newState;
    case SYNC_CART:
      let products = state.find((p) => p.id === action.id);
      if (products.quantity === action.quantity) {
        return state;
      }
      let newStates = state.slice();
      newStates.find((p) => p.id === action.id).quantity = action.quantity;
      return newStates;
    case REMOVE_FROM_CART:
      let States = [];
      for (const product of state) {
        if (product.id !== action.id) {
          States.push(product);
        }
      }
      return States;
    case SUBMIT_ORDER:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
