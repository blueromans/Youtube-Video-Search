import * as types from './types';

const initState = {
  videos: [],
  pageToken: null,
  loading: false,
};

export default function videos(state = initState, action) {
  switch (action.type) {
    case types.GET_VIDEOS:
      return {
        loading: true,
      };
    case types.SUCCESS:
      const {videos, pageToken} = action.payload;
      console.log('Success', pageToken);
      return {
        ...state,
        loading: false,
        videos,
        pageToken: pageToken,
      };
    case types.ERROR:
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
}
