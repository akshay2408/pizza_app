import { FETCH_INGREDIENT_SUCCESS } from '../actions/actionTypes';

const ingredientsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_INGREDIENT_SUCCESS:
      return reconcile(state, action.data);
    default:
      return state;
  }
};

const reconcile = (oldData, newData) => {
  const newDataById = {};
  for (const entry of newData) {
    newDataById[entry._id] = entry;
  }

  const result = [];
  for (const entry of oldData) {
    if (newDataById[entry._id]) {
      result.push(newDataById[entry._id]);
      delete newDataById[entry._id];
    } else {
      result.push(entry);
    }
  }

  for (const entryId in newDataById) {
    result.push(newDataById[entryId]);
  }

  return result;
};

export { ingredientsReducer };
