import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import riskReducer from "../features/investments/selector/riskSelectorSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    risk: riskReducer,
  },
});
