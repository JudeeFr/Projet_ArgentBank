import React from "react";
import accounts from '../../data/accounts.json';
import Account from '../account';
import { useNavigate } from 'react-router-dom';
import './style.css'
import arrow from '../../assets/img/arrow.png'

export default function List() {
    
    const navigate = useNavigate();
     // ajout de la fonction pour afficher la page selon l'id de l'account
    function accountDetail(id) {
    navigate('/account/'+ id);
    
    }

    return (
        <div className="list">
        {accounts.map((account, index) => (
                <div key={index} onClick={() => accountDetail(account.id)} >
                    <Account 
                    key={index} 
                    title={account.title} 
                    amount={account.amount} 
                    description={account.description}
                    icon={arrow} 
                    />
                </div>
                ))}
        </div>
    )

}