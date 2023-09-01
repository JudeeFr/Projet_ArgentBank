import { createAction } from '@reduxjs/toolkit'

export const getUser = createAction('get-user')

export const getUserSuccess = createAction(
  'get-user-success',
  (user) => {
    return {
      payload: user,
    }
  }
)

export const getUserError = createAction(
  'get-user-error', (error) => {
  return {
    payload: error,
  }
})