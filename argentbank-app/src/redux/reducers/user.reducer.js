import { createReducer } from '@reduxjs/toolkit';
import { logOut } from '../actions/logout.action';
import { getUser, getUserSuccess, getUserError } from '../actions/getuser.action';
import { editUser, editUserSuccess, editUserError } from '../actions/edituser.action';


const initialStateUser = {
  isLoading: false,
  isLogged: false,
  user: {},
  error: '',
}

export const userReducer = createReducer(initialStateUser, (builder) => {
  return builder
    .addCase(getUser, (draft) => {
      draft.isLoading = true
      
      return
    })
    .addCase(getUserSuccess, (draft, action) => {
      draft.isLoading = false
      draft.isLogged = true
      draft.user = action.payload
      draft.error = ''
      return
    })
    .addCase(getUserError, (draft, action) => {
      draft.isLoading = false
      draft.isLogged = true
      draft.user = {}
      draft.error = action.payload
      return
    })
    .addCase(logOut, (draft, action) => {
      draft.isLoading = false
      draft.isLogged = false
      draft.user = {}
      draft.error = action.payload
      return
    })
    .addCase(editUser, (draft) => {
      draft.isLoading = true
      draft.isLogged = true
      return
    })
    .addCase(editUserSuccess, (draft, action) => {
      draft.isLoading = false
      draft.isLogged = true
      draft.user = action.payload
      draft.error = ''
      return
    })
    .addCase(editUserError, (draft, action) => {
      draft.isLoading = false
      draft.isLogged = true
      draft.user = {}
      draft.error = action.payload
      return
    })
})