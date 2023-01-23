import axios from "axios";
import { fetchingByIdInProgress, fetchingByIdSuccess, fetchingByIdError } from "./articleSlice";
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

export const fetchArticleById = (id: string | undefined) => async (dispatch: any) => {
  try {
    dispatch(fetchingByIdInProgress());
    const response = await axios.get(
      `/articles/${id}`
    );
    dispatch(fetchingByIdSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchingByIdError(error.message));
  }
};

