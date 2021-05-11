import * as types from './types';

const initState = {
  videos: [],
  pageToken: null,
  loading: false,
  ready: false,
};

export default function videos(state = initState, action) {
  switch (action.type) {
    case types.GET_VIDEOS:
      return {
        loading: true,
      };
    case types.SUCCESS:
      const {videos, pageToken} = action.payload;
      return {
        ...state,
        loading: false,
        ready: true,
        videos,
        pageToken: pageToken,
      };
    case types.ERROR:
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        ready: true,
        error,
      };
    default:
      return state;
  }
}
