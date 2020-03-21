import React, { useState } from 'react';
import FormInput from '../form/form-input.component';
import axios from 'axios';
import { useAuth } from '../../contexts'


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {createSession} = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/auth', {email, password}).then(
      res => {
        if(res.status === 200){
          createSession(res.data)
        }
      }
    )
  }

  const handleChange = (set, value) => {
      set(value);
  }

    return (
    <form onSubmit={e => handleSubmit(e)}>
        <FormInput
        name='email'
        type='email'
        handleChange={(e) => handleChange(setEmail, e.target.value)}
        value={email}
        label='Email'
        required
      />
      <FormInput
        name='password'
        type='password'
        value={password}
        handleChange={(e) => handleChange(setPassword, e.target.value)}
        label='Password'
        required
        />
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);
}

export default Login;