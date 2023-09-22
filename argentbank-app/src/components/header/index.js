import React  from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/actions/logout.action';
import './style.css';


export const logout = () => {
    localStorage.removeItem('token');     
    return (dispatch) => {
      dispatch(logOut())       
    } 
  }

export default function Header() {
  const dispatch = useDispatch()

  const Logged = (state) => state.user.isLogged
  const isLogged = useSelector(Logged)

  const selectUser = (state) => state.user.user
  const user = useSelector(selectUser)

  return (
    <div className='header'>
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
    
        <div>{ isLogged ? 
            <div className='log-btn'>
                <div  className="main-nav-item">
                   <Link to="/dashboard">
                    <i className="fa fa-user-circle"></i>
                   <p>{user.body.userName}</p>
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

