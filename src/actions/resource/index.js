import { ERROR_FETCH_RESOURCE, LOADING, RECEIVED_RESOURCE } from "./actions";
import Resource from "../../api/resource";

export const loading = (status = true) => ({
  type: LOADING,
  status
});

export const receivedResource = resources => ({
  type: RECEIVED_RESOURCE,
  resources
});

export const errorFetchResource = error => ({
  type: ERROR_FETCH_RESOURCE,
  error
});

export const fetchResources = ({ filter }) => async dispatch => {
  try {
    dispatch(loading());
    const resource = new Resource();
    const response = await resource.fetchResource({ filter });
    if (response.status === 200) {
      dispatch(receivedResource(response.data));
    }
    dispatch(loading(false));
  } catch (err) {}
};
