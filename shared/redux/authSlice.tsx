import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

// Async thunk for Steam login
interface SteamLoginResponse {
  token: string;
}

export const steamLogin = createAsyncThunk(
  "auth/steamLogin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<SteamLoginResponse>("/api/auth/steam"); 
      return response.data.token; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
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
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;