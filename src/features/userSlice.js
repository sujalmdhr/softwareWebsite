// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  number: '',
  oldPassword: '',
  password: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      // Return a new state object with updated values
      return {
        ...state,
        ...action.payload
      };
    }
  }
});

export const { updateProfile } = userSlice.actions;

export default userSlice.reducer;
