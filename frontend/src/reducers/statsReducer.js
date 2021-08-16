import { FETCH_STATS_SUCCESS, REGISTER_SUCCESS } from '../actions/actionTypes';

const statsReducer = (state = { usersCount: 0, productsCount: 0 }, action) => {
  switch (action.type) {
    case FETCH_STATS_SUCCESS:
      return {
        usersCount: action.data.users,
        productsCount: action.data.products,
      };
    case REGISTER_SUCCESS:
      return {
        usersCount: state.usersCount + 1,
        productsCount: state.productsCount,
      };

    default:
      return state;
  }
};

export default statsReducer;
