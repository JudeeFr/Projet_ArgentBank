import React, { useEffect, useState } from 'react';
import './style.css';
import arrowDown from '../../assets/img/arrowDown.png'

export default function Collapse({date, description, amount, balance, type, category, note}) {
    const [selected, setSelected] = useState(false);
	const [firstClick, setFirstClick] = useState(false);

	useEffect(() => {
		// on initialise le firstClick a true au moment ou on detecte le premier click
		if (selected && !firstClick) {
			setFirstClick(true);
		}
	}, [selected]);
   
   
    return (
        <div className='collapse-grid'>
        
        <div className='collapse-title'>    
            <div className='collapse-col-1'>
                {date}
            </div>
            <div className='collapse-col-2'> 
                {description}
            </div>
            <div className='collapse-col-3'>
                {amount}
            </div>
            <div className='collapse-col-4'>
                {balance}
            </div>
            <div className='collapse-col-5'>
            <img
					src={arrowDown}
					alt="arrow"
					className={`collapse-arrow ${selected ? 'rotate' : 'rotate2'}`}
					onClick={() => setSelected(!selected)}
				/>
            </div>
        </div>

        <div style={{ display: !firstClick ? 'none' : '' }} 
        className={`collapse-text ${selected ? 'collapse-open' : 'collapse-close'}`}>
            <div className='col-1'>
                <div>Transaction type</div>
                <div>Category</div>
                <div>Note</div>
            </div>
            <div className='col-2'> 
                <div>
                    {type}
                </div>
                <div className='category'>
                    {category}
                    <i className="fa-solid fa-pencil"></i>
                </div>
                <div className='note'>
                    {note}
                    <i className="fa-solid fa-pencil"></i>
                </div>
            </div>
            <div className='col-3'></div>
            <div className='col-4'></div>
            <div className='col-5'></div>
            
        </div>

        </div>
    );
  }