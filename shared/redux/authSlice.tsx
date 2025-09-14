import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getSteamAuthUrl } from "../utils/environment";

interface User {
  steamId: string;
  username: string;
  avatarUrl?: string;
  isAdmin?: boolean;
}

interface AuthState {
  token: string | null;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null
};

// Async thunk for Steam login
interface SteamLoginResponse {
  token: string;
  user: User;
}

export const steamLogin = createAsyncThunk("auth/steamLogin", async (_, { rejectWithValue }) => {
  try {
    // Get Steam auth URL using environment utilities
    const steamAuthUrl = getSteamAuthUrl();
    console.log("🎮 Steam auth URL:", steamAuthUrl);
    const response = await axios.get<SteamLoginResponse>(steamAuthUrl);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Login failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.error = null;
    },
    // Used when login succeeds via popup
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
    },
    // Reset state when login starts
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Set error when login fails
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Initialize auth state from localStorage
    initializeAuth: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(steamLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(steamLogin.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload && typeof action.payload === 'object' && 'token' in action.payload) {
          state.token = action.payload.token;
          state.user = action.payload.user;
        } else {
          // Fallback for string token
          state.token = action.payload as string;
        }
      })
      .addCase(steamLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { logout, loginSuccess, loginStart, loginFailure, initializeAuth } = authSlice.actions;
export default authSlice.reducer;
