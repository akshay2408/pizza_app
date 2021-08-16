import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const PizzaCard = (props) => {
  const { id, name, image, description, size, price } = props;

  let footer;
  if (Auth.isUserAdmin()) {
    footer = (
      <div className='card-footer'>
        <small className='text-muted'>{size} </small>
        <small className='text-muted'> - ${price} </small>{' '}
      </div>
    );
  } else {
    footer = (
      <div className='card-footer'>
        <small className='text-muted'>{size} </small>
        <small className='text-muted'> - ${price} </small>{' '}
        <Link
          to={`/details/${id}`}
          type='button'
          className='btn btn-primary float-right btn-sm'
        >
          Details
        </Link>
      </div>
    );
  }

  return (
    <div className='card col-4'>
      <img className='card-img-top card-image' src={image} alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{description}</p>
      </div>
      {footer}
    </div>
  );
};

export default PizzaCard;
