import {GET_NEWS_DATA, GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAIL} from "./constants";

export const getNewsData = data => ({
    type: GET_NEWS_DATA,
    data,
  });

  export const getNewsDataSuccess = data => ({
    type: GET_NEWS_DATA_SUCCESS,
    data,
  });

  export const getNewsDataFail = data => ({
    type: GET_NEWS_DATA_FAIL,
    data,
  });

