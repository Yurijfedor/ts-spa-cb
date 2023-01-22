import axios from "axios";

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./articlesSlice";

axios.defaults.baseURL =
  "https://api.spaceflightnewsapi.net/v3";

export const fetchArticles = () => async (dispatch: any) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get(
      "/articles"
    );
    dispatch(fetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchingError(error.message));
  }
};
