import { fetchIngredients } from '../Services';
import { FETCH_INGREDIENT_SUCCESS } from './actionTypes';
import { beginAjax, endAjax } from './ajaxStatusActions';

function fetchDataSuccess(data) {
  return {
    type: FETCH_INGREDIENT_SUCCESS,
    data,
  };
}

function fetchIngredientsAction() {
  return async (dispatch) => {
    dispatch(beginAjax());
    const data = await fetchIngredients();
    dispatch(fetchDataSuccess(data));
    dispatch(endAjax());
  };
}

export { fetchIngredientsAction };
