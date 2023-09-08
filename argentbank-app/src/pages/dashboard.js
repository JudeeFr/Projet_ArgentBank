
import '../assets/css/App.css';
import Header from '../components/header'
import Footer from '../components/footer';
import List from '../components/list/list'
import Edit from '../components/edit';
import React from "react";
import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux'


const Dashboard = () => {
  
  const Logged = (state) => state.user.isLogged
  const isLogged = useSelector(Logged)
 
  return (
    <div>
      <div>
        <Header />
      </div>
      
      { isLogged ? 
      
      <div className='main'>
        <Edit/>
        <h2 className="sr-only">Accounts</h2> 
      <div >
        <List/>
      </div>	
      </div>
      :
        < Navigate to="/" replace={true}/>
    }
      
      <div>
        <Footer/>
      </div>
  </div>
  );
}

export default Dashboard;