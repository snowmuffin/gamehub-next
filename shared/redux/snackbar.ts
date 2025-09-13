import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SnackbarMessage {
  id: string;
  message: string;
  severity?: "success" | "error" | "warning" | "info";
  type?: "success" | "error" | "warning" | "info"; // legacy support
  duration?: number;
  action?: React.ReactNode;
}

interface SnackbarState {
  messages: SnackbarMessage[];
  open: boolean;
  currentMessage: SnackbarMessage | null;
}

const initialState: SnackbarState = {
  messages: [],
  open: false,
  currentMessage: null
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<Omit<SnackbarMessage, "id">>) => {
      const id = Date.now().toString();
      const message: SnackbarMessage = {
        id,
        severity: "info",
        duration: 6000,
        ...action.payload
      };

      state.messages.push(message);

      if (!state.open) {
        state.currentMessage = message;
        state.open = true;
      }
    },
    hideSnackbar: (state) => {
      state.open = false;
      state.currentMessage = null;
    },
    removeSnackbar: (state, action: PayloadAction<string>) => {
      state.messages = state.messages.filter((msg) => msg.id !== action.payload);

      // If we removed the current message, show next one
      if (state.currentMessage?.id === action.payload) {
        state.open = false;
        state.currentMessage = null;

        if (state.messages.length > 0) {
          state.currentMessage = state.messages[0];
          state.open = true;
        }
      }
    },
    processNextMessage: (state) => {
      if (state.messages.length > 0 && !state.open) {
        state.currentMessage = state.messages[0];
        state.open = true;
      }
    },
    clearAllMessages: (state) => {
      state.messages = [];
      state.open = false;
      state.currentMessage = null;
    },
    // Legacy action (for backward compatibility)
    SNACKBAR_PUSH: (state, action: PayloadAction<Omit<SnackbarMessage, "id">>) => {
      const id = Date.now().toString();
      const message: SnackbarMessage = {
        id,
        severity: "info",
        duration: 6000,
        ...action.payload
      };

      state.messages.push(message);

      if (!state.open) {
        state.currentMessage = message;
        state.open = true;
      }
    }
  }
});

export const snackbarActions = snackbarSlice.actions;
export const selectSnackbar = (state: { snackbar: SnackbarState }) => state.snackbar;
export default snackbarSlice.reducer;
