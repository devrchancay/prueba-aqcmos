import {
  LOADING,
  RECEIVED_RESOURCE,
  ERROR_FETCH_RESOURCE
} from "../actions/resource/actions";

const resource = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.status };
    case RECEIVED_RESOURCE:
      return { ...state, data: action.resources };
    case ERROR_FETCH_RESOURCE:
      return { ...state, messages: { error: action.error } };
    default:
      return state;
  }
};

export default resource;
