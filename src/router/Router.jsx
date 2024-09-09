import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Auth from '../pages/Auth';
import Battlefield from '../pages/Battlefield';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import KatalogGame from '../pages/KatalogGame';
import News from '../pages/News';
import NotFound from '../pages/NotFound';
import PrivateChat from '../pages/PrivateChat';

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
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/private',
        element: <PrivateChat />,
      },
      {
        path: '/catalogGame',
        element: <KatalogGame />,
      },
    ],
  },
]);
