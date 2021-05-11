import Geolocation from '@react-native-community/geolocation';
import {takeEvery, put, call, all} from 'redux-saga/effects';
import * as types from './types';

export const receiveGeoLocation = location => ({
  type: types.SET_POSITION,
  payload: {
    location,
  },
});

export const failedGeoLocation = () => ({
  type: types.SET_ERROR,
});
export const requestGeoLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      {enableHighAccuracy: true, timeout: 3000, maximumAge: 1000},
    );
  });

function* fetchGeoLocation() {
  const {coords} = yield call(requestGeoLocation);
  try {
    yield put(receiveGeoLocation(coords));
  } catch (error) {
    yield put(failedGeoLocation(error.message));
  }
}

export function* watchLocationActions() {
  yield all([takeEvery(types.GET_LOCATION, fetchGeoLocation)]);
}
