import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { user } from 'http://localhost:3001/api/v1'

const initialState = {
  username: [],
  firstname: '',
  lastname: '',
  error: null
}

export const fetchUpdate = createAsyncThunk('put/fetchUpdate', async () => {
  const response = await user.put('/user/profile')
  return response.data
})