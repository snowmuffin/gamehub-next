"use client";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage
import reducer from "./reducer";
import authReducer from "./authSlice"; // Import authSlice

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    local_variable: reducer,
    auth: persistedAuthReducer, // Use persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check
    }),
});

export const persistor = typeof window !== "undefined" ? persistStore(store) : null; // Only initialize in the browser
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
