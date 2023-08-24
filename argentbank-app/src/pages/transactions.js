import React  from 'react';
import '../assets/css/App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Account from '..//components/account'
import Collapse from '../components/collapse';

export default function Transactions() {
  return (
    <div>  
      <div >   
        <Header/>
      </div>      
      <div>
        <Account/>
      </div>   
      <div className='grid'>
        <div className='col_1'>
          Date 
        </div>
        <div className='col_2'>
          Description
        </div>
        <div className='col_3'>
          Amount
        </div>
        <div className='col_4'>
          Balance
        </div>
      </div>
      <div>
        <Collapse
        date={""}
        description={""}
        amount={""}
        balance={""}
        />
      </div>
      <div>  
        <Footer/>
      </div>
</div>
  );
}
