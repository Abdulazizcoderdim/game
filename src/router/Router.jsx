import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Battlefield from '../pages/Battlefield';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/*',
        element: <NotFound />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/catalog',
        element: <Faq />,
      },
      {
        path: '/support',
        element: <Battlefield />,
      },
    ],
  },
]);
