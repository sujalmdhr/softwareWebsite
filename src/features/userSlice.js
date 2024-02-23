// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'sujal',
  email: 'sujalmdhr@gmail.com',
  number: '1234567890',
  oldPassword: 'asd',
  password: 'asdf'
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
