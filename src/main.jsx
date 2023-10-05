import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home/Home.jsx';
import AddBook from './pages/AddBook/AddBook.jsx';
import EditBook from './pages/EditBook/EditBook.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/addBook',
				element: <AddBook />,
			},
			{
				path: '/editBook',
				element: <EditBook />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
);
