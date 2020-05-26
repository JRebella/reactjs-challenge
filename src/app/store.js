import { configureStore } from "@reduxjs/toolkit";
import riskReducer from "../features/investments/selector/selectorSlice";

export default configureStore({
  reducer: {
    risk: riskReducer,
  },
});
