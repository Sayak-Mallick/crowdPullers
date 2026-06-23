import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  mobileMenuOpen: boolean;
  activeSection: string;
}

const initialState: UIState = {
  mobileMenuOpen: false,
  activeSection: "hero",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload;
    },
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
  },
});

export const { setMobileMenuOpen, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
