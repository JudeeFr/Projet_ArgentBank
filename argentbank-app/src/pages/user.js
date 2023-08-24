import React  from 'react';
import '../assets/css/App.css';
import Header from '../components/header'
import Footer from '../components/footer';
import Account from '../components/account';
import Message from '../components/message';
// import { useNavigate } from 'react-router-dom';


export default function User() {
//   const navigate = useNavigate();
//  ajout de la fonction pour afficher la page selon l'id du compte 
//   function accountDetail(id) {
//     navigate('transactions/' + id);
//   }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='main'>
        <Message/>
        <h2 className="sr-only">Accounts</h2>
        <Account 
        title="Argent Bank Checking (x8349)" 
        amount="$2,082.79" 
        description="Available Balance"
        />
        <Account 
        title="Argent Bank Savings (x6712)" 
        amount="$10,928.42" 
        description="Available Balance"
        />
        <Account 
        title="Argent Bank Credit Card (x8349)" 
        amount="$184.30" 
        description="Current Balance"
        />

{/* ajout de la methode map pour afficher les comptes
		<div className="list">
			{account.map((account, index) => (
				<div key={index} onClick={() => accountDetail(account.id)}>
					<Account key={index} title={account.cover} amount={account.amount} description={account.description} />
				</div>
			))}
		</div> */}
	
      </div>
      <div>
        <Footer/>
      </div>
  </div>
  );
}

