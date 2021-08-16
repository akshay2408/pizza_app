import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import toastr from 'toastr';

import Auth from './utils/auth';
import Cart from './components/Cart';
import Details from './components/Details';
import Login from './components/Auth/Login';
import AdminRoute from './Routes/AdminRoute';
import PrivateRoute from './Routes/PrivateRoute';
import HomePage from './components/Home/HomePage';
import Register from './components/Auth/Register';
import fetchStatsAction from './actions/statsActions';
import Orders from './components/Orders/Orders/Orders';
import OrderDetails from './components/Orders/Details/OrderDetails';
import NotFoundPage from './components/Common/NotFound/NotFoundPage';
import { Header, FooterComponent as Footer } from './components/Layout';

import { logoutAction } from './actions/authActions';
import { fetchProductsAction } from './actions/productsActions';
import { fetchIngredientsAction } from './actions/ingredientActions';

const App = (props) => {
  // states
  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();
  // selectors
  const stats = useSelector((state) => state.stats);
  const loginSuccess = useSelector((state) => state.login.success);

  useEffect(() => {
    if (Auth.isUserAuthenticated()) {
      setLoggedIn(true);
    }
    dispatch(fetchStatsAction());
    dispatch(fetchProductsAction());
    dispatch(fetchIngredientsAction()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loginSuccess) {
      setLoggedIn(true);
    }
  }, [loginSuccess]);

  const logout = () => {
    setLoggedIn(false);
    dispatch(logoutAction());
    toastr.success('Logout successful');
    props.history.push('/login');
  };

  const isAdmin = Auth.isUserAdmin();
  const { productsCount, usersCount } = stats;

  return (
    <div className='App'>
      <Header
        products={productsCount}
        users={usersCount}
        loggedIn={loggedIn}
        isAdmin={isAdmin}
        logout={logout}
      />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/products/:page' component={HomePage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <AdminRoute path='/admin/orders' component={Orders} />
          <PrivateRoute path='/details/:id' component={Details} />
          <PrivateRoute path='/cart' component={Cart} />
          <PrivateRoute path='/orders/details/:id' component={OrderDetails} />
          <PrivateRoute exact path='/orders' component={Orders} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default withRouter(App);
