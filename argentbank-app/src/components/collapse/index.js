import React  from 'react';
import './style.css';


export default function Collapse({date, description, amount, balance}) {
    return (
        <div>
        
        <div className='transactions-grid'>    
            <div className='col-1'>
                {date}
            </div>
            <div className='col-1'> 
                {description}
            </div>
            <div className='col-2'>
                {amount}
            </div>
            <div className='col-3'>
                {balance}
            </div>
            <div className='col-4'>
                
            </div>
        </div>
        </div>
    );
  }