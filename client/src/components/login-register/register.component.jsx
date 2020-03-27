import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import FormInput from '../form/form-input.component';
import { useAuth } from '../../contexts';

const Register = ({ id }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const { session, createSession } = useAuth();

    useEffect(() => {
        console.log(id)
        function getUsers(){
        axios.get(`/api/users/${id}`)
        .then(
            res => {
                setEmail(res.data.email)
                setName(res.data.name)
                setRole(res.data.role)
            }
        ).catch(function(err){
            console.log(err)
        })
    } 
    if(id !== 'new'){
        getUsers()
    }
    }, [])


  function createUser(e){
    e.preventDefault();
    if(password !== password2){
      //window.alert('Password do not match')
      console.log(role)
    } else {
      axios.post('/api/users', {email, password, name, role}).then(
        res => {
          createSession(res.data)
          console.log(role);
        }
      )
    }
  }
    
  function updateUser(e){
    e.preventDefault();
    axios.put(`/api/users/${id}`, {email, name, role}).then(
        res => {
          if(res.status === 204){
            window.location.reload();
          }
        }
      )
    }

    const handleChange = (set, value) => {
        set(value);
    }

    const AdminForm = (
      <FormInput 
        label="Role"
        type="role" 
        as='select' 
        name="role" 
        value={role} 
        onChange={e => setRole(e.target.value)}
    >
        <option>admin</option>
        <option>coach</option>
        <option>user</option>
    </FormInput>
    )

  return (
    <form>
    {session && session.role === 'admin' ?
      AdminForm : ''
    }
    <FormInput
        name='name'
        type='name'
        handleChange={(e) => handleChange(setName, e.target.value)}
        value={name}
        label='Name'
        required
      />
    <FormInput
        name='email'
        type='email'
        handleChange={(e) => handleChange(setEmail, e.target.value)}
        value={email}
        label='Email'
        required
      /> 
  {
    id === 'new' ? (
    <Fragment>
      <FormInput
      name='password'
      type='password'
      handleChange={(e) => handleChange(setPassword, e.target.value)}
      value={password}
      label='Password'
      required
    />
    <FormInput
      name='password2'
      type='password'
      handleChange={(e) => handleChange(setPassword2, e.target.value)}
      value={password2}
      label='Confirm Password'
      required
    />
    <hr />
    <FormInput 
        label="Whats is your main goal?"
        type="role" 
        as='select' 
        name="role" 
        value={role} 
        onChange={e => setRole(e.target.value)}
    >
        <option>Choose your main goal</option>
        <option value="user">To get fit</option>
        <option value="coach">To help others</option>
    </FormInput>
    <br />
    <button onClick={e => createUser(e)} type="submit" className="btn btn-primary">Submit</button> 
    </Fragment>
    ) :
    <button onClick={e => updateUser(e)} type="submit" className="btn btn-primary">Submit</button>
  }
  </form>
    );
}

export default Register;