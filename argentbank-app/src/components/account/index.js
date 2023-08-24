import React  from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import arrow from '../../assets/img/arrow.png'

export default function Account({title, amount, description}) {
    return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to="/transactions">
          <img src={arrow} className=" " alt="arrow"></img>
          <i className="fa-solid fa-xmark close"></i>
        </Link>
        
      </div>
    </section>
    );
  }