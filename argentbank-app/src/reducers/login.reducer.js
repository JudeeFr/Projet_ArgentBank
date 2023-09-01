
import { createReducer } from '@reduxjs/toolkit'
import {login, loginSuccess, loginError } from '../actions/login.action'


const initialStateToken = {
  isLoading: false,
  token: '',
  tokenExist: '',
  error: '',
}

export const loginReducer = createReducer(initialStateToken, (builder) => {
  return builder
    .addCase(login, (draft) => {
      draft.isLoading = true
      draft.token = ''
      draft.tokenExist = ''
      draft.error =  ''
      return
    })
    .addCase(loginSuccess, (draft, action) => {
      draft.isLoading = false
      draft.token = action.payload
      draft.tokenExist = true
      draft.error =  ''
      return
    })
    .addCase(loginError, (draft, action) => {
      draft.isLoading = false
      draft.token = ''
      draft.tokenExist = false
      draft.error = action.payload
      return
    })
})
