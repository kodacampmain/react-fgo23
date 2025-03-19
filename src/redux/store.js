import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./slices/todo";
import usersReducer from "./slices/users";
import constant from "../configs/constant";

const store = configureStore({
  // pada createStore, reducer jika lebih dari 1 digabungkan menggunakan combineReducer
  reducer: {
    todo: todoReducer,
    users: usersReducer,
  },
  devTools: constant.nodeEnv !== "production",
});

export default store;
