const host = process.env.REACT_APP_SERVER_URL;

const fetchIngredients = async () => {
  const res = await window.fetch(host + 'pizza/ingredients');
  return res.json();
};

export { fetchIngredients };
