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
    // 환경 유틸리티를 사용하여 Steam 인증 URL 가져오기
    const steamAuthUrl = getSteamAuthUrl();
    console.log("🎮 Steam 인증 URL:", steamAuthUrl);
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
    logout: state => {
      state.token = null;
      state.error = null;
    },
    // 팝업에서 성공적으로 로그인했을 때 사용
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    // 로그인 시작 시 상태 초기화
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },
    // 로그인 실패 시 에러 설정
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(steamLogin.pending, state => {
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

export const { logout, loginSuccess, loginStart, loginFailure } = authSlice.actions;
export default authSlice.reducer;
