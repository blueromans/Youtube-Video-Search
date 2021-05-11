import {put, call, all, takeEvery} from 'redux-saga/effects';
import * as types from './types';
import {get} from '../../helper';

export const actionGetVideosSuccess = (videos, nextPageToken) => ({
  type: types.SUCCESS,
  payload: {
    videos,
    pageToken: nextPageToken,
  },
});
export const actionGetVideosError = error => ({
  type: types.ERROR,
  payload: {
    error,
  },
});
export function* getVideos(state) {
  const {
    coordinate: {latitude, longitude},
    pageToken,
    maxResult,
  } = state;
  const credentials = {
    part: 'snippet',
    channelType: 'any',
    location: latitude + ',' + longitude,
    locationRadius: '5km',
    g: 'surfing',
    order: 'date',
    type: 'video',
    maxResults: maxResult,
  };
  if (pageToken !== null) {
    credentials.pageToken = pageToken;
  }
  const queryString = Object.keys(credentials)
    .map(key => key + '=' + credentials[key])
    .join('&');
  try {
    const {items, nextPageToken} = yield call(get, 'search', queryString);
    console.log('Action', nextPageToken)
    yield put(actionGetVideosSuccess(items, nextPageToken));
  } catch (error) {
    yield put(actionGetVideosError(error));
  }
}

export function* watchVideoActions() {
  yield all([takeEvery(types.GET_VIDEOS, getVideos)]);
}
