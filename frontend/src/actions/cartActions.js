import { ADD_TO_CART, SYNC_CART, REMOVE_FROM_CART } from './actionTypes';

function addToCartAction(id, option = []) {
  return {
    type: ADD_TO_CART,
    id,
    option,
  };
}

function removeFromCartAction(id) {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
}

function syncCartAction(id, quantity) {
  return {
    type: SYNC_CART,
    id,
    quantity,
  };
}

export { addToCartAction, syncCartAction, removeFromCartAction };
