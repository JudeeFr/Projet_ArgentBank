import React  from 'react';
import '../assets/css/App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import LoginForm from '../components/login-form';

export default function Login() {
  return (
    <div>  
      <div >   
        <Header/>
        </div>      
        <div className='bg-dark'>
        <LoginForm/>  
        </div>   
        <div>  
        <Footer/>
        </div>
  </div>
  );
}