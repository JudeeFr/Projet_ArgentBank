import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';

import { loginUser, userSelector, clearState } from '../../features/user/userSlice'
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { isFetching, isSuccess, isError, errorMessage } =
  useSelector(userSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({
      email: email,
      password: password,
      loggedIn: true,
    }))
  }
    

  // Update UI based on the redux state(Success or Error)
  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      // navigate.push("/dashboard");
      window.location.replace('./dashboard');
    }
  }, [isError, isSuccess]);

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
