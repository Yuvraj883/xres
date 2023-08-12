import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Model from './components/Model';
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
        element:<GetStarted/>,
        errorElement:<ErrorPage/>
    },
    {
        path:'/get-started/class',
        element:<Model/>,
        errorElement:<ErrorPage/>
    },
    {
        path:'/get-started/lab',
        element:<Model/>,
        errorElement:<ErrorPage/>
    }
]);
export default router;