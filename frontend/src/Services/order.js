import Auth from '../utils/auth';

const host = process.env.REACT_APP_SERVER_URL;

const submitOrder = async (data) => {
  const res = await window.fetch(host + 'orders/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + Auth.getToken(),
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

const fetchUserOrders = async () => {
  const res = await window.fetch(host + 'orders/user', {
    headers: {
      Authorization: 'bearer ' + Auth.getToken(),
    },
  });
  return res.json();
};

const fetchPendingOrders = async () => {
  const res = await window.fetch(host + 'orders/pending', {
    headers: {
      Authorization: 'bearer ' + Auth.getToken(),
    },
  });
  return res.json();
};

const approveOrder = async (id) => {
  const res = await window.fetch(host + `orders/approve/${id}`, {
    method: 'POST',
    headers: {
      Authorization: 'bearer ' + Auth.getToken(),
    },
  });

  return res.json();
};

export { submitOrder, fetchPendingOrders, fetchUserOrders, approveOrder };
