import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }, thunkAPI) => {
    try {
      
      const response = await fetch(
        'http://localhost:3001/api/v1/user/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email, password: password }),
        }
      );
      let data = await response.json();
      console.log('response', data);
      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        // ajouter la redirection 
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

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload ;
    },
    logout: (state) => {
      state.user = null;
    }
  },

});

export const { login, logout } = userSlice.actions;

export const userSelector = (state) => state.user.user;

export const userReducer = userSlice.reducer;