import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  const { loggedIn, isAdmin, logout } = props;
  return (
    <header>
      <nav className='navbar navbar-dark bg-warning'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Link className='navbar-brand' to='/'>
                Pizza App
              </Link>
              <NavLink
                className='nav-link'
                activeClassName='active'
                exact
                to='/'
              >
                Home
              </NavLink>
              {loggedIn && !isAdmin && (
                <NavLink className='nav-link' to='/orders'>
                  My Orders
                </NavLink>
              )}
              {isAdmin && (
                <NavLink className='nav-link' to='/admin/orders/pending'>
                  Pending Orders
                </NavLink>
              )}
              {loggedIn && !isAdmin && (
                <NavLink className='nav-link' to='/cart'>
                  Cart
                </NavLink>
              )}
              {loggedIn && (
                // eslint-disable-next-line
                <a className='nav-link' href='#' onClick={logout}>
                  Logout
                </a>
              )}
              {!loggedIn && (
                <NavLink className='nav-link' to='/login'>
                  Login
                </NavLink>
              )}
              {!loggedIn && (
                <NavLink className='nav-link' to='/register'>
                  Register
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
