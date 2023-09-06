import React  from 'react';
import './style.css';


export default function Account({title, amount, description, icon}) {
    return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
        
      </div>
      <svg  className="cta"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <image xlinkHref={icon} data-name="icon" width="50" height="50" x="0" y="50px" />
          </svg>
    </section>
    );
  }