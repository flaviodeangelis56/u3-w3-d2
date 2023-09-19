import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteRed";
import JobsReducer from "../reducers/jobsRed";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptTransform({ secretKey: process.env.REACT_APP_PERSIST_KEY })],
};

const rootReducer = combineReducers({
  content: favoriteReducer,
  jobs: JobsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
