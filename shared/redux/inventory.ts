import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InventoryItem {
  id: number;
  displayName: string;
  description: string;
  quantity: number;
  rarity: number;
  icons: string[];
  category: string;
  indexName: string;
}

interface InventoryState {
  items: InventoryItem[];
  selectedItem: InventoryItem | null;
  loading: boolean;
  error: string | null;
  filters: {
    search: string;
    rarity?: string;
    type?: string;
  };
  // Modal-related state
  modalData: any | null;
  isSubmit: boolean;
  submitQuantity: number;
  submitPrice: number;
}

const initialState: InventoryState = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
  filters: {
    search: "",
    rarity: undefined,
    type: undefined
  },
  // Modal-related initial state
  modalData: null,
  isSubmit: false,
  submitQuantity: 0,
  submitPrice: 0
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<InventoryItem[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSelectedItem: (state, action: PayloadAction<InventoryItem | null>) => {
      state.selectedItem = action.payload;
    },
    updateItem: (state, action: PayloadAction<{ id: number; updates: Partial<InventoryItem> }>) => {
      const { id, updates } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex] = { ...state.items[itemIndex], ...updates };
      }
      if (state.selectedItem?.id === id) {
        state.selectedItem = { ...state.selectedItem, ...updates };
      }
    },
    addItem: (state, action: PayloadAction<InventoryItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (state.selectedItem?.id === action.payload) {
        state.selectedItem = null;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setFilters: (state, action: PayloadAction<Partial<InventoryState["filters"]>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    // Modal-related actions
    INVENTORY_CHANGE_MODAL_ITEMS_PRICE: (state, action: PayloadAction<number>) => {
      state.submitPrice = action.payload;
    },
    INVENTORY_CHANGE_MODAL_ITEMS_QTY: (state, action: PayloadAction<number>) => {
      state.submitQuantity = action.payload;
    },
    INVENTORY_REQUEST_SUBMIT: (state, action: PayloadAction<any>) => {
      state.isSubmit = true;
      state.modalData = action.payload;
    },
    setModalData: (state, action: PayloadAction<any>) => {
      state.modalData = action.payload;
    },
    resetSubmitState: (state) => {
      state.isSubmit = false;
      state.submitQuantity = 0;
      state.submitPrice = 0;
    }
  }
});

export const inventoryActions = inventorySlice.actions;
export const selectInventory = (state: { inventory: InventoryState }) => state.inventory;
export default inventorySlice.reducer;
