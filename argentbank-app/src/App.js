import React  from 'react';
import './assets/css/App.css';
import Home from './pages/home';
import User from './pages/user';
import Login from './pages/login';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ajout des chemins des pages
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'user',
		element: <User />,
	},
	{
		path: 'login',
		element: <Login />,
	},
]);

function App() {
  return (
		<div >
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
