import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Paginator from '../../utils/Paginator';
import PizzaCardList from '../Pizza/PizzaCardList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ProductMenu = (props) => {
  // states
  const [query, setQuery] = useState('');
  // selectors
  var products = useSelector((state) => state.products);
  const stats = useSelector((state) => state.stats);
  /*
  -----------------------------------
    Function to manage states
  ----------------------------------
  */
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setQuery(value);
  };

  products = products.sort((a, b) => a.name.localeCompare(b.name));
  let productsCount = stats.productsCount;
  var page = Number(props.match.params.page) || 1;
  if (query !== '') {
    page = 1;
    products = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    productsCount = products.length;
  }
  const pageSize = 6;
  products = products.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className='container'>
      <div className='row space-top'>
        <div className='col-md-12'>
          <h1 className='jumbotron-heading text-center'>Menu</h1>
          <form className='form-inline md-form form-sm active-cyan active-cyan-2 d-flex align-items-center'>
            <FontAwesomeIcon icon={faSearch} /> <i class='fas fa-search'></i>
            <input
              className='form-control form-control-sm ml-3 w-75 ml-5'
              type='text'
              placeholder='Search for the pizza you are looking for...'
              aria-label='Search'
              name='query'
              onChange={onChange}
              value={query}
            />
          </form>
        </div>
      </div>
      <PizzaCardList products={products} {...props} />
      <Paginator
        productsCount={productsCount}
        pageSize={pageSize}
        current={page}
      />
    </div>
  );
};

export default ProductMenu;
