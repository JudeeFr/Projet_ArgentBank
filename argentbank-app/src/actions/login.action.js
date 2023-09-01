import { createAction } from '@reduxjs/toolkit'


export const login = createAction('login')

export const loginSuccess = createAction(
  'login-success',
  (token) => {
    return {
      payload: { token },
    }
  }
)

export const loginError = createAction(
  'login-error', (error) => {
  return {
    payload: { error },
  }
})