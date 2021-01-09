import { storiesAPI } from "../api/api";

const SET_STORIES = "SET_STORIES";
const SET_IDS = "SET_IDS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  stories: [],
  storyIds: [],
  isFetching: false
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORIES:
      return {
        ...state,
        stories:
          state.stories.length < 100
            ? [...state.stories, ...action.stories]
            : action.stories
      };
    case SET_IDS:
      return {
        ...state,
        storyIds: action.ids
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

const setIds = ids => ({ type: SET_IDS, ids });
const setStories = stories => ({ type: SET_STORIES, stories });
const setTougleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const requestIds = () => {
  return dispatch => {
    dispatch(setTougleIsFetching(true));
    storiesAPI.getStoryIds().then(response => {
      //debugger;
      dispatch(setIds(response.data));
      dispatch(setTougleIsFetching(false));
    });
  };
};

export const requestStories = ids => {
  return dispatch => {
    let i = 0;
    let items = [];
    dispatch(requestIds());
    while (i < 100) {
      storiesAPI.getStory(ids[i]).then(response => {
        items.push(response.data);
        dispatch(setStories(items));
        items = [];
      });
      i++;
    }
  };
};

export default storiesReducer;
