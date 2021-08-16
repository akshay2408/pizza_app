import { fetchProducts } from '../Services';
import { FETCH_DATA_SUCCESS } from './actionTypes';
import { beginAjax, endAjax } from './ajaxStatusActions';

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
  };
}

function fetchProductsAction() {
  return async (dispatch) => {
    dispatch(beginAjax());
    const data = await fetchProducts();
    dispatch(fetchDataSuccess(data));
    dispatch(endAjax());
  };
}

export { fetchProductsAction };
