import React  from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    return ( 
              
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>  
          <Link to="/User">
          <button className="sign-in-button">Sign In</button>       
          </Link>
        </form>
      </div>  
          
    );
  }