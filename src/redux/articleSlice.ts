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

const initialState = {
  articleItem: {title: "", imageUrl: "", summary: ""},
  isLoading: false,
  error: null,
};

const articleSlice = createSlice({
  name: "articleItem",
  initialState: initialState,

  reducers: {
    fetchingByIdInProgress(state) {
      state.isLoading = true;
    },
    fetchingByIdSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.articleItem = action.payload;
    },
    fetchingByIdError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingByIdInProgress, fetchingByIdSuccess, fetchingByIdError } =
  articleSlice.actions;

export const selectName = (state: RootState) => state.articles;

export const articleReducer = articleSlice.reducer;
 