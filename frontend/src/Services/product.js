const host = process.env.REACT_APP_SERVER_URL;

const fetchStats = async () => {
  const res = await window.fetch(host + 'stats');
  return res.json();
};

const fetchProducts = async () => {
  const res = await window.fetch(host + 'pizza/all');
  return res.json();
};

export { fetchProducts, fetchStats };
