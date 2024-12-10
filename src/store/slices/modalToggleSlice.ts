import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalToggleState {
  [key: string]: boolean;
}

const initialState: ModalToggleState = {};

const modalToggleSlice = createSlice({
  name: 'modalToggle',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalToggleSlice.actions;
export default modalToggleSlice.reducer;
