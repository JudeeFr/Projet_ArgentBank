import React  from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/argentBankLogo.png";
// import '../../assets/css/main.css';
import './style.css';

export default function Header() {
  return (
    <div className='header'>
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
    
        <div>
            <Link to="/Login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
            <Link to="#" className="main-nav-item">
                <i className="fa fa-sign-out"></i>
                Sign out
            </Link> 
        </div>
        </nav>
    </div>
  );
}

