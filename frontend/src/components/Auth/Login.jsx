import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toastr from 'toastr';

import Input from '../Common/Input';
import Auth from '../../utils/auth';
import loginValidator from '../../utils/loginValidator';
import { loginValidationFunc } from '../../utils/formValidator';
import { loginAction, redirectAction } from '../../actions/authActions';

const initialStates = {
  email: '',
  password: '',
};

const Login = (props) => {
  // states
  const [inputs, setInputs] = useState(initialStates);

  // selectors
  const loginSuccess = useSelector((state) => state.login.success);
  const loginError = useSelector((state) => state.loginError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Auth.isUserAuthenticated()) {
      props.history.push('/');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loginError.hasError) {
      toastr.error(loginError.message);
    } else if (loginSuccess) {
      dispatch(redirectAction());
      toastr.success('Login successful');
      props.history.push('/');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginError, loginSuccess]);

  /*
  -----------------------------------
    Function to manage input states
  ----------------------------------
  */
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  /*
  -------------------------
    Function to mange login
  -------------------------
  */
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    if (!loginValidator(email, password)) return;
    dispatch(loginAction(email, password));
  };

  const { email, password } = inputs;
  let validObj = loginValidationFunc(email, password);
  return (
    <div className='container'>
      <div className='row space-top'>
        <div className='col-md-12'>
          <h1>Login</h1>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className='row space-top'>
          <div className='col-md-4'>
            <Input
              type='text'
              name='email'
              label='E-mail'
              placeholder='Enter e-mail'
              value={email}
              onChange={onChange}
              valid={validObj.validEmail}
            />
            <Input
              type='password'
              name='password'
              label='Password'
              placeholder='Enter password'
              value={password}
              onChange={onChange}
              valid={validObj.validPassword}
            />
            <input type='submit' className='btn btn-primary' value='Login' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
