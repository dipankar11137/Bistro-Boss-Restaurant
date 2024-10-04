import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '../Layout/Dashboard';
import Main from '../Layout/Main';
import AddItems from '../Pages/Dashboard/AddItems/AddItems';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import Cart from '../Pages/Dashboard/Cart/Cart';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Secret from '../Pages/Shared/Secret/Secret';
import SignUp from '../Pages/SignUp/SignUp';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'menu',
        element: <Menu></Menu>,
      },
      {
        path: 'order/:category',
        element: <Order></Order>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: 'secret',
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
      // admin routes
      {
        path: 'addItems',
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>,
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
