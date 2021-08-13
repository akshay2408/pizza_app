import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
