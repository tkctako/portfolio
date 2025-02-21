import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  id: number;
}

const initialState: ModalState = {
  id: 0
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    closeModal: (state) => {
      state.id = 0;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
