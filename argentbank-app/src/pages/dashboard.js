
import '../assets/css/App.css';
import Header from '../components/header'
import Footer from '../components/footer';
import List from '../components/list/list'
import Edit from '../components/edit';
import React from "react";


const Dashboard = () => {

  return (
    <div>
      
      <div>
        <Header />
      </div>
      <div className='main'>
        <Edit/>
        <h2 className="sr-only">Accounts</h2>
        
      <div >
        <List/>
      </div>
	
      </div>
      <div>
        <Footer/>
      </div>
  </div>
  );
}

export default Dashboard;