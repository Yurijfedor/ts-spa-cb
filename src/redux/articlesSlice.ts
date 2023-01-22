import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Article {
  readonly id: string;
  featured: boolean,
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  launches: launches[];
  events: events[];
}

interface launches {
    id: string;
    provider: string;
}

interface events {
    id: string;
    provider: string;
}

const articlesInitialState = {
  articlesList: [],
  isLoading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState: articlesInitialState,

  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.articlesList = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  articlesSlice.actions;

export const selectName = (state: RootState) => state.articles;

export const articlesReducer = articlesSlice.reducer;
 