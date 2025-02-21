import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  form: {
    name: string;
    email: string;
    message: string;
  };
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
}

const initialState: ContactState = {
  form: {
    name: '',
    email: '',
    message: ''
  },
  status: 'idle',
  error: null
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<typeof initialState.form>>) => {
      state.form = { ...state.form, ...action.payload };
    },
    setStatus: (state, action: PayloadAction<typeof initialState.status>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetForm: (state) => {
      state.form = initialState.form;
      state.status = 'idle';
      state.error = null;
    }
  }
});

export const { updateForm, setStatus, setError, resetForm } = contactSlice.actions;
export default contactSlice.reducer;