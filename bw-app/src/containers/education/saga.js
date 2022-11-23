import { takeEvery, put } from 'redux-saga/effects'
import { GET_NEWS_DATA, GET_NEWS_DATA_SUCCESS } from './constants';

function* getNews() {debugger;
    let data = yield fetch('https://vanillainstal1.wpengine.com/wp-json/bwserve/v1/feed/?type=post');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: GET_NEWS_DATA_SUCCESS, data})
}

function* educationSaga() {
    yield takeEvery(GET_NEWS_DATA, getNews)
}

export default educationSaga;