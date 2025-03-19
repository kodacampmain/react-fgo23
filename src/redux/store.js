import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoReducer from "./slices/todo";
import usersReducer from "./slices/users";
import constant from "../configs/constant";

const todoPersistConfig = {
  key: "fgo23:todo-store",
  storage,
};

const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);

const store = configureStore({
  // pada createStore, reducer jika lebih dari 1 digabungkan menggunakan combineReducer
  reducer: {
    todo: persistedTodoReducer,
    users: usersReducer,
  },
  devTools: constant.nodeEnv !== "production",
});

export const persistedStore = persistStore(store);
export default store;
