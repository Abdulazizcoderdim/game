import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Faq from '../pages/Faq';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/catalog',
        element: <Faq />,
      },
    ],
  },
]);
