import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Info from './Info';
import Auth from '../../utils/auth';
import NotFoundPage from '../Common/NotFound/NotFoundPage';
import { addToCartAction } from '../../actions/cartActions';

const Details = (props) => {
  const { match } = props;
  // states
  const [options, setOptions] = useState([]);
  //selectors
  const products = useSelector((state) => state.products);
  const ingredients = useSelector((state) => state.ingredient);

  const dispatch = useDispatch();

  const productId = match.params.id;

  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <NotFoundPage errMessage='PRODUCT NOT FOUND' />;
  }

  const username = Auth.getUsername();

  /*
  -----------------------------------
    Function to add product to cart
  ----------------------------------
  */
  const addToCart = (id) => {
    dispatch(addToCartAction(id, options));
  };

  /*
  -----------------------------------
    Function to manage select option 
  ----------------------------------
  */
  const onSelected = (event) => {
    const selected = [];
    let selectedOption = event.target.selectedOptions;

    for (let i = 0; i < selectedOption.length; i++) {
      selected.push(selectedOption.item(i).value);
    }
    setOptions(selected);
  };

  return (
    <div className='container'>
      <div className='row space-top'>
        <div className='col-md-12'>
          <h1>{product.name}</h1>
        </div>
      </div>
      <Info
        product={product}
        username={username}
        addToCart={addToCart}
        ingredients={ingredients}
        onSelected={onSelected}
        options={options}
        {...props}
      />
    </div>
  );
};

export default Details;
