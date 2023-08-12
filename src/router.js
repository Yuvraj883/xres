import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import GetStarted from './components/GetStarted';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement:<ErrorPage/>,
           },
    {
        path:'/get-started',
        element:<GetStarted/>
    }
]);
export default router;