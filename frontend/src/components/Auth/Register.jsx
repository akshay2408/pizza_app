import React, { useEffect, useState } from 'react';
import toastr from 'toastr';
import { useDispatch, useSelector } from 'react-redux';

import Auth from '../../utils/auth';
import registerValidator from '../../utils/registerValidator';
import { registerValidationFunc } from '../../utils/formValidator';
import {
  registerAction,
  loginAction,
  redirectAction,
} from '../../actions/authActions';
import Input from '../Common/Input';

const initialStates = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = (props) => {
  const { history } = props;
  // States
  const [inputs, setInputs] = useState(initialStates);
  // Selectors
  const registerSuccess = useSelector((state) => state.register.success);
  const loginSuccess = useSelector((state) => state.login.success);
  const registerError = useSelector((state) => state.registerError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Auth.isUserAuthenticated()) {
      history.push('/');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (registerError.hasError) {
      toastr.error(registerError.message);
    } else if (registerSuccess) {
      dispatch(loginAction(inputs.email, inputs.password));
    } else if (loginSuccess) {
      dispatch(redirectAction());
      toastr.success('Registration successful');
      history.push('/');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerError, registerSuccess, loginSuccess]);

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
  -----------------------------------
    Function to manage registration
  ----------------------------------
  */
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = inputs;

    if (!registerValidator(username, email, password, confirmPassword)) return;
    dispatch(registerAction(username, email, password));
  };

  const { username, email, password, confirmPassword } = inputs;

  let validObj = registerValidationFunc(
    email,
    username,
    password,
    confirmPassword
  );

  return (
    <div className='container'>
      <div className='row space-top'>
        <div className='col-md-12'>
          <h1>Register</h1>
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
              type='text'
              name='username'
              label='Username'
              placeholder='Enter username'
              value={username}
              onChange={onChange}
              valid={validObj.validUsername}
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
            <Input
              type='password'
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Enter your password again'
              value={confirmPassword}
              onChange={onChange}
              valid={validObj.validConfirmPassword}
            />
            <input type='submit' className='btn btn-primary' value='Register' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
