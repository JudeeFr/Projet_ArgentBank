import React  from 'react';
import './assets/css/App.css';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
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
		path: 'login',
		element: <Login />,
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
