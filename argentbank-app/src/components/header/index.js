import React  from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/argentBankLogo.png";
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, logout } from '../../features/user/userSlice';

export default function Header() {
    const user = useSelector(userSelector)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        // ajouter la redirection
  
        dispatch(logout())
      };
      
  return (
    <div className='header'>
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
    
        <div>{ user ? <Link to="/Login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link> 
            : <div to="#" className="main-nav-item" onClick={(e)=>handleLogout(e)}>
                <i className="fa fa-sign-out" ></i>
                Sign out
            </div> 
            }
            
            
        </div>
        </nav>
    </div>
  );
}

