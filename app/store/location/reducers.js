import {Dimensions} from 'react-native';
import * as types from './types';
const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const initialLocation = {
  latitude: 39.925533,
  longitude: 32.866287,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
  heading: 90,
};

const initState = {
  location: initialLocation,
  error: null,
};
export default function location(state = initState, action) {
  switch (action.type) {
    case types.SET_POSITION: {
      const {location} = action.payload;
      location.latitudeDelta = LATITUDE_DELTA;
      location.longitudeDelta = LONGITUDE_DELTA;
      return {
        ...state,
        location,
        error: null,
        fetching: false,
      };
    }

    case types.SET_ERROR: {
      const {error} = action.payload;

      return {
        ...state,
        error: error,
        fetching: false,
      };
    }

    default: {
      return state;
    }
  }
}
