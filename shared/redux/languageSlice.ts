import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  code: string;
}

const initialState: LanguageState = {
  code: "en" // Default language code
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.code = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
