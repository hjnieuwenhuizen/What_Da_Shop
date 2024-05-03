import { createBrowserRouter } from 'react-router-dom';
import Shop from './routes/Shop';
import ErrorPage from './components/ErrorPage';

/**
 * @method router
 */
export default createBrowserRouter([
	{
		path: '/',
		element: <Shop />,
		errorElement: <ErrorPage />
	}
]);
