
import './style.css';
import arrowUp from '../../assets/img/arrowUp.png';
import React, { useEffect, useState } from 'react';

export default function Collapse({date, description, amount, balance, type, category}) {
    const [selected, setSelected] = useState(false);
	const [firstClick, setFirstClick] = useState(false);

	useEffect(() => {
		// on initialise le firstClick a true au moment ou on detecte le premier click
		if (selected && !firstClick) {
			setFirstClick(true);
		}
	}, [selected]);
   
   
    return (
        <div className='collapse-title'> 
            <div className='col_1'>
                {date} 
            </div>
            <div className='col_2'>
                {description} 
             </div>
            <div className='col_3'>
                {amount} 
            </div>
            <div className='col_4'>
                {balance} 
            </div>
            <div className='col_5'>
            <img
					src={arrowUp}
					alt="arrow"
					className={`collapse_arrow ${selected ? 'rotate' : 'rotate2'}`}
					onClick={() => setSelected(!selected)}
				/>
            </div>
                <div
                    style={{ display: !firstClick ? 'none' : '' }}
                    // ajout d'une class selon l'etat
                    className={`collapse_text ${
                        selected ? 'collapse_open' : 'collapse_close'
                    }`}
                >
                    <div className='col-1'>
                        <div>
                            <p>Transaction type</p>
                        </div>
                        <div>
                            <p>Category</p>
                        </div>
                        <div>
                            <p>Note</p>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div>
                            <p>{type}</p>
                        </div>
                        <div>
                            <p>{category}</p>
                            <i className="fa-solid fa-pencil"></i>
                        </div>
                        <div>
                            <p>lorem ipsum</p>
                            <i className="fa-solid fa-pencil"></i>
                        </div>
                    </div>
                    
                </div>
        </div>
    );
  }