import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    number: '',
    oldPassword: '',
    password: ''
  },
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateProfile } = userSlice.actions;

export default userSlice.reducer;
