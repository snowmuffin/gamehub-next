"use client";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage
import reducer from "./reducer";
import authReducer from "./authSlice"; // Import authSlice
import languageReducer from "./languageSlice"; // languageSlice import
import inventoryReducer from "./inventory"; // Import inventory slice
import snackbarReducer from "./snackbar"; // Import snackbar slice

const persistConfig = {
  key: "root",
  storage
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    local_variable: reducer,
    auth: persistedAuthReducer, // Use persisted reducer
    language: languageReducer, // language 리듀서 추가
    inventory: inventoryReducer, // inventory 리듀서 추가
    snackbar: snackbarReducer // snackbar 리듀서 추가
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false // Disable serializable check
    })
});

export const persistor = typeof window !== "undefined" ? persistStore(store) : null; // Only initialize in the browser
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
