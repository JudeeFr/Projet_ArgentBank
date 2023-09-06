import React  from 'react';
import '../assets/css/App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Account from '../components/account'
// import Collapse from '../components/collapse';
import { useParams, useNavigate } from 'react-router-dom';
import accounts from '../data/accounts.json';
import { useEffect } from 'react';
import close from '../assets/img/close.png'

export default function AccountDetail() {
  // utilisation de la fonction filter pour afficher le compte selon l'id et de useparams pour récupérer l'id au clic de la page dashboard
	let { id } = useParams();
	let account = accounts.filter((account) => account.id === id)[0];
  // ajout du hook useEffect et usenavigate pour renvoyer sur la page erreur en cas d'id faux
	const navigate = useNavigate();
	useEffect(() => {
		if (!account) {
			navigate('Notfound', { replace: true });
		}
	}, [account, navigate]);
	if (!account) {
		return null;
	}

 
  return (
    <div>  
      <div >   
        <Header/>
      </div>      
      <div onClick={()=> navigate('/dashboard')}>

        <Account
        title={account.title}
        amount={account.amount}
        description={account.description}
        icon={close}
        
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
{/*       
      <div className="list">
			{transactions.map((transaction, index) => (
				<div key={index}>
					<Collapse
        date={transaction.date}
        description={transaction.description}
        amount={transaction.amount}
        balance={transaction.balance}
        type={transaction.type}
        category={transaction.category}
        note={transaction.note}
        />
				</div>
			))}
		  </div> */}
        
      
      <div>  
        <Footer/>
      </div>
</div>
  );
}
