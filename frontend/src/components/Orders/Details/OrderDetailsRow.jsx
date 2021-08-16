import React from 'react';

const OrderDetailsRow = (props) => {
  const { product, ingredients } = props || {};
  const { name, quantity, price, ingredients: ingredient } = product || {};

  let total = quantity * price;
  if (ingredient && ingredient.length > 0) {
    let ingredientsInCart = ingredients.filter((p) =>
      ingredient.includes(p.name)
    );
    let ingredientPrice = ingredientsInCart.reduce(function (
      accumulator,
      item
    ) {
      return accumulator + item.price;
    },
    0);
    total = quantity * (price + ingredientPrice);
  }
  return (
    <tr>
      <th>#{props.index + 1}</th>
      <td>
        {name}
        <br />
        <em>{ingredient && ingredient.join(',')} </em>
      </td>
      <td>$ {price.toFixed(2)}</td>
      <td>{quantity}</td>
      <td>$ {total.toFixed(2)}</td>
    </tr>
  );
};

export default OrderDetailsRow;
