import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  persistReducer,
  REGISTER,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoReducer from "./slices/todo";
import usersReducer from "./slices/users";
import constant from "../configs/constant";

// const todoPersistConfig = {
//   key: "fgo23:todo-store",
//   storage,
// };

// const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);

const persistConfig = {
  key: "fgo23:store",
  storage,
  blacklist: ["users"],
};

const usersPersistConfig = {
  key: "fgo23:store:users",
  storage,
  whitelist: ["data"],
};

const persistedReducers = persistCombineReducers(persistConfig, {
  todo: todoReducer,
  users: persistReducer(usersPersistConfig, usersReducer),
});

const store = configureStore({
  // pada createStore, reducer jika lebih dari 1 digabungkan menggunakan combineReducer
  reducer: persistedReducers,
  devTools: constant.nodeEnv !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    });
  },
});

export const persistedStore = persistStore(store);
export default store;
