import axios from 'axios'
import { login, loginSuccess, loginError } from '../actions/login.action';
import { getUser, getUserSuccess, getUserError} from '../actions/getuser.action';
import { editUser, editUserSuccess, editUserError } from '../actions/edituser.action';

const URL = 'http://localhost:3001/api/v1/user/'

export const getToken = (email, password) => {
  return (dispatch) => {
    dispatch(login())
    axios
      .post(URL + 'login', {
        email,
        password,
      })
      .then((response) => {
        dispatch(loginSuccess(response.data.body.token))
        localStorage.setItem('token', response.data.body.token)
        const token = localStorage.getItem('token')
        dispatch(getProfile(token))
        console.log(response.data);
        
      })
      .catch((error) => {
        dispatch(loginError(error.message))
      })
  }
}
export const getProfile = (token) => {
  return (dispatch) => {
    dispatch(getUser())
    axios({
      method: 'POST',
      url: URL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(getUserSuccess(response.data))
      })
      .catch((error) => {
        dispatch(getUserError(error.message))
      })
  }
}

export const editProfile = (userName) => {
  
  const token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(editUser())
    axios({
      method: 'PUT',
      url: URL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        userName
      },
    })
      .then((response) => {
        dispatch(editUserSuccess(response.data))
        
      })
      .catch((error) => {
        dispatch(editUserError(error.message))
      })
  }
}