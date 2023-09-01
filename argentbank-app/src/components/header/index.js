import React  from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions/logout.action';

import './style.css';

export const logout = () => {
    localStorage.removeItem('token')
    
    return (dispatch) => {
      dispatch(logOut())  
    } 

  }
export default function Header() {
    const dispatch = useDispatch()

  const selectLogin = (state) => state.user.isLogged
  const login = useSelector(selectLogin)

  const selectUser = (state) => state.user.user
  const user = useSelector(selectUser)
      
  return (
    <div className='header'>
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
    
        <div>{ login ? 
            <div className='log-btn'>
                <div  className="main-nav-item">
                   <Link to="/dashboard">
                    <i class="fa fa-user-circle"></i>
                   <p>{user.body.firstName}</p>
                   </Link>
                </div>    
                <div className="main-nav-item" onClick={() => dispatch(logout())}>
                    <i className="fa fa-sign-out" ></i>
                    Sign out
                </div> 
            </div>
            :
            <Link to="/signin" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link> 
            }
            
            
        </div>
        </nav>
    </div>
  );
}

