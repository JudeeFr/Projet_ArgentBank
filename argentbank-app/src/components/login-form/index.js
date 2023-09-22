import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../../redux/app/Api';
import './style.css';
import { Navigate } from "react-router-dom";
import Header from '../header';
import Footer from '../footer';

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 
  const dispatch = useDispatch();
  
  const message = useSelector((state) => state.user.user.status)

  const handleSubmit = (e) => {
    e.preventDefault()
      dispatch(getToken(email, password))
    }
    if (message === 200) {
      return < Navigate to="/dashboard" />
    }
  return ( 
    <div className="login">
        <div>
        <Header />
        
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form 
        onSubmit={(e) => handleSubmit(e)}
        method="POST"
        >
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
            value={email} 
            type="email" 
            id="email" 
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
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
            <label htmlFor="remember-me">Remember me</label>
          </div>  
          <button className="sign-in-button" type='submit'>Sign In</button>              
        </form>
      </div>  
      </div>
      <div>
      <Footer/>
      </div>
          </div>
    );
  }
