// This store is meant to help reduce boilerplate code related to error/loading state of async fetching components in the application
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const slice = createSlice({
  name: "composync",
  initialState: {
    loading: {},
    fetching: {},
    posting: {},
    error: {},
  },
  reducers: {
    setLoading: (state, action) => {
      const { componentName } = action.payload;
      state.loading[componentName] = true;
      state.error[componentName] = null;
    },
    setFetching: (state, action) => {
      const { componentName } = action.payload;
      state.fetching[componentName] = true;
      state.error[componentName] = null;
    },
    setPosting: (state, action) => {
      const { componentName } = action.payload;
      state.posting[componentName] = true;
      state.error[componentName] = null;
    },
    setError: (state, action) => {
      const { componentName, message } = action.payload;
      state.loading[componentName] = false;
      state.posting[componentName] = false;
      state.fetching[componentName] = false;
      state.error[componentName] = message;
    },
    setReady: (state, action) => {
      const { componentName } = action.payload;
      state.loading[componentName] = false;
      state.posting[componentName] = false;
      state.fetching[componentName] = false;
      state.error[componentName] = null;
    },
  },
});

export const composyncActions = slice.actions;
export const composyncReducer = slice.reducer;

// Hook for component usage
export const useComponentState = (componentName, startFetching = false) => {
  //@TODO initialState startFetching
  return useSelector((state) => {
    const { asyncHelper } = state;
    return {
      error: asyncHelper.error[componentName],
      loading: asyncHelper.loading[componentName],
      posting: asyncHelper.posting[componentName],
      fetching: asyncHelper.fetching[componentName],
    };
  });
};
