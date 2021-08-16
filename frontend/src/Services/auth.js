const host = process.env.REACT_APP_SERVER_URL;

const register = async (username, email, password) => {
  const res = await window.fetch(host + 'auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  return res.json();
};

const login = async (email, password) => {
  const res = await window.fetch(host + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return res.json();
};

export { register, login };
