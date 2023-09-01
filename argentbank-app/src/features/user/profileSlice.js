
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userProfile = createAsyncThunk(
  'user/profile',
  async ({id, email }, thunkAPI) => {
    try {     
      const response = await fetch(
        'http://localhost:3001/api/v1/user/profile',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: id, email: email }),
        }
      );
      let data = await response.json();
      console.log('response', data);
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    email: {email},
  },
  reducers: {
    profile: (state, action) => {
      state.profile = action.payload ;
    },
    
  },

});

export const { profile } = profileSlice.actions;

export const profileSelector = (state) => state.profile;

export const profileReducer = profileSlice.reducer;