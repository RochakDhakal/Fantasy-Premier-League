import { configureStore } from "@reduxjs/toolkit";
import fplReducer from "./reducers/reducers"
const store = configureStore({
  reducer: fplReducer,
});
export default store
