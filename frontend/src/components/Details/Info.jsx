import React from 'react';

const Info = (props) => {
  const { addToCart, history, product, ingredients, options, onSelected } =
    props;
  const { _id, image, name, size, description, price, weight } = product || {};

  /*
  -----------------------------------
    Function to add product to cart
  ----------------------------------
  */
  const onOrder = (e) => {
    e.preventDefault();
    addToCart(_id);
    history.push('/cart');
  };

  return (
    <div className='row space-top'>
      <div className='col-md-4'>
        <div className='card text-white bg-primary'>
          <div className='card-body bg-light'>
            <blockquote className='card-blockquote'>
              <img src={image} alt={name} className='card-image' />
            </blockquote>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <p>
          <span className='light-blue-text'>Size</span>: {size}
        </p>
        <p>
          <span className='light-blue-text'>Description</span>: {description}
        </p>
        <p>
          <span className='light-blue-text'>Weight</span>: {weight}gr
        </p>

        <p>
          {' '}
          <span className='light-blue-text'>Choose ingredient combination</span>
          : {'   '}
          {ingredients && ingredients.length > 0 ? (
            <select multiple value={options} onChange={onSelected}>
              {ingredients.map((options, key) => (
                <option key={key} value={options.name}>
                  {options.name} +({options.price})
                </option>
              ))}
            </select>
          ) : null}
        </p>
        <p>
          <span className='light-blue-text'>Price</span>: ${price.toFixed(2)}
        </p>
        <button className='btn btn-warning btn-sm' onClick={onOrder}>
          Order
        </button>
      </div>
    </div>
  );
};

export default Info;
