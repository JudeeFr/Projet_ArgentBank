import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';

import { loginUser, userSelector, login } from '../../features/user/userSlice'



export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({
      email: email,
      password: password,
    }));
    dispatch(login({
      email: email,
      password: password,
      loggedIn: true,
    }))
  }

  return ( 
              
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form 
        onSubmit={(e) => handleSubmit(e)}
        method="POST"
        >
          <div className="input-wrapper">
            <label for="email">Email</label>
            <input 
            value={email} 
            type="email" 
            id="email" 
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input 
            value={password} 
            type="password" 
            id="password" 
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input 
            type="checkbox" 
            id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>         
          <button className="sign-in-button" type='submit'>Sign In</button>              
        </form>
      </div>  
          
    );
  }
