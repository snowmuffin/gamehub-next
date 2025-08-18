"use client";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage
import reducer from "./reducer";
import authReducer from "./authSlice"; // Import authSlice
import languageReducer from "./languageSlice"; // languageSlice import
import inventoryReducer from "./inventory"; // Import inventory slice
import snackbarReducer from "./snackbar"; // Import snackbar slice

// Persist only the auth.token to avoid SSR/CSR hydration mismatches caused by
// rehydrating transient UI state like loading/error which affects rendered text.
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"]
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    local_variable: reducer,
  auth: persistedAuthReducer, // Persist only token
    language: languageReducer, // language 리듀서 추가
    inventory: inventoryReducer, // inventory 리듀서 추가
    snackbar: snackbarReducer, // snackbar 리듀서 추가
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false // Disable serializable check
    })
});

// One-time localStorage migration to remove legacy persisted root state that may
// include volatile UI flags (loading/error) and cause hydration mismatches.
if (typeof window !== "undefined") {
  try {
    const legacyRootKey = "persist:root"; // previous default key
    if (localStorage.getItem(legacyRootKey)) {
      const legacy = localStorage.getItem(legacyRootKey);
      // Attempt to salvage existing auth token if present before purging
      if (legacy) {
        try {
          const parsed = JSON.parse(legacy);
          if (parsed.auth) {
            // old persisted auth reducer shape might have token at top-level
            const maybeAuth = JSON.parse(parsed.auth);
            const token = maybeAuth?.token;
            if (token && !localStorage.getItem("authTokenBackup")) {
              localStorage.setItem("authTokenBackup", token);
            }
          }
        } catch (_) {
          // ignore parsing errors
        }
      }
      localStorage.removeItem(legacyRootKey);
    }
  } catch (_) {
    // ignore storage access errors (e.g., Safari private mode)
  }
}

export const persistor = typeof window !== "undefined" ? persistStore(store) : null; // Only initialize in the browser
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
