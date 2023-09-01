import React  from 'react';
import {useSelector} from 'react-redux'
import '../assets/css/App.css';
import LoginForm from '../components/login-form';
import Dashboard from '../pages/dashboard'

export default function Login() {
  const selectLogin = (state) => state.user.isLogged
  const login = useSelector(selectLogin)

  return (
    <div>  
     
        { login ? <Dashboard/> : <LoginForm/>}
        
    
  </div>
  );
}