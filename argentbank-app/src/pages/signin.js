import React  from 'react';
import {useSelector} from 'react-redux'
import '../assets/css/App.css';
import LoginForm from '../components/login-form';
import Dashboard from '../pages/dashboard'

export default function Login() {
  
  const Logged = (state) => state.user.isLogged
  const isLogged = useSelector(Logged)

  return (
    <div>  
     
        { isLogged ? <Dashboard/> : <LoginForm/>}
        
    
  </div>
  );
}