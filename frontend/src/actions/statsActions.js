import { FETCH_STATS_SUCCESS } from '../actions/actionTypes';
import { fetchStats } from '../Services';
import { beginAjax, endAjax } from './ajaxStatusActions';

function fetchStatsSuccess(data) {
  return {
    type: FETCH_STATS_SUCCESS,
    data,
  };
}

function fetchStatsAction() {
  return async (dispatch) => {
    dispatch(beginAjax());
    const data = await fetchStats();
    dispatch(fetchStatsSuccess(data));
    dispatch(endAjax());
  };
}

export default fetchStatsAction;
