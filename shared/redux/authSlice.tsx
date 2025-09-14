import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getSteamAuthUrl } from "../utils/environment";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null
};

// Async thunk for Steam login
interface SteamLoginResponse {
  token: string;
}

export const steamLogin = createAsyncThunk("auth/steamLogin", async (_, { rejectWithValue }) => {
  try {
    // Get Steam auth URL using environment utilities
    const steamAuthUrl = getSteamAuthUrl();
    console.log("🎮 Steam auth URL:", steamAuthUrl);
    const response = await axios.get<SteamLoginResponse>(steamAuthUrl);
    return response.data.token;
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
      state.error = null;
    },
    // Used when login succeeds via popup
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload;
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
      state.token = action.payload;
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
        state.token = action.payload;
      })
      .addCase(steamLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { logout, loginSuccess, loginStart, loginFailure, initializeAuth } = authSlice.actions;
export default authSlice.reducer;
