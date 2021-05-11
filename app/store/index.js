import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';

import {videoActions, videoReducer} from './video';
import {locationActions, locationReducer} from './location';

export const rootReducer = combineReducers({
  videos: videoReducer,
  location: locationReducer,
});

export function* rootSaga() {
  yield all([
    videoActions.watchVideoActions(),
    locationActions.watchLocationActions(),
  ]);
}
