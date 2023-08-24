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
        <Account
        title="Argent Bank Checking (x8349)" 
        amount="$2,082.79" 
        description="Available Balance"
        />
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
        <div className='col_5'>
        </div>
      </div>
      <div>
        <Collapse
        date="27/02/20"
        description="Golden Sun Backery"
        amount="$8.00"
        balance="$298.00"
        type="Electronic"
        category="Food"
        note="Lorem Ipsum"
        />
         <Collapse
        date="27/02/20"
        description="Golden Sun Backery"
        amount="$8.00"
        balance="$298.00"
        type="Electronic"
        category="Food"
        note="Lorem Ipsum"
        />
         <Collapse
        date="27/02/20"
        description="Golden Sun Backery"
        amount="$8.00"
        balance="$298.00"
        type="Electronic"
        category="Food"
        note="Lorem Ipsum"
        />
         <Collapse
        date="27/02/20"
        description="Golden Sun Backery"
        amount="$8.00"
        balance="$298.00"
        type="Electronic"
        category="Food"
        note="Lorem Ipsum"
        />
         <Collapse
        date="27/02/20"
        description="Golden Sun Backery"
        amount="$8.00"
        balance="$298.00"
        type="Electronic"
        category="Food"
        note="Lorem Ipsum"
        />
      </div>
      <div>  
        <Footer/>
      </div>
</div>
  );
}
