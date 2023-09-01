import React  from 'react';
import './assets/css/App.css';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Signin from './pages/signin';
import Transactions from './pages/transactions'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// ajout des chemins des pages
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'dashboard',
		element: <Dashboard />,
	},
	{
		path: 'signin',
		element: <Signin />,
	},
	{
		path: 'transactions',
		// path: 'transactions/:id',
		element: <Transactions />,
	},
]);

function App() {
  return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
