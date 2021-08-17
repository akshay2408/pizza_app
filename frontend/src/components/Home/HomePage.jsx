import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import ProductMenu from '../ProductMenu/ProductMenu';

const HomePage = (props) => {
  const isAdmin = Auth.isUserAdmin();
  const isAuthenticated = Auth.isUserAuthenticated();

  let headingText, secondLinkName, secondLinkPath;
  if (isAdmin) {
    headingText = ', ' + Auth.getUsername();
    secondLinkName = 'View pending orders';
    secondLinkPath = '/admin/orders';
  } else if (isAuthenticated) {
    headingText = ', ' + Auth.getUsername();
    secondLinkName = 'View orders';
    secondLinkPath = '/orders';
  } else {
    headingText = '';
    secondLinkName = 'Register';
    secondLinkPath = '/register';
  }

  return (
    <>
      <div className='container'>
        <section className='jumbotron text-center'>
          <div className='container'>
            <h1 className='jumbotron-heading'>
              Welcome to Pizza App{headingText} !
            </h1>
            {!isAuthenticated && (
              <p className='lead text-muted'>
                Your favourite pizza is now just a few clicks away. Register now
                and choose from our decent menu.
              </p>
            )}
            <p>
              <Link to={secondLinkPath} className='btn btn-secondary'>
                {secondLinkName}
              </Link>
            </p>
          </div>
        </section>
      </div>
      <ProductMenu {...props} />
    </>
  );
};

export default HomePage;
