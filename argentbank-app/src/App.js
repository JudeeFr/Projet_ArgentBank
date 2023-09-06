import React  from 'react';
import './assets/css/App.css';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Signin from './pages/signin';
import AccountDetail from './pages/accountDetail';
import Notfound from './pages/Notfound';

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
		path: 'account/:id',
		element: <AccountDetail />,
	},
	{
		path: '*',
		element: <Notfound />,
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
