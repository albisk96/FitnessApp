import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap'
import { useAuth } from '../../contexts';

const Register = ({ id }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [confirmed, setConfirmed] = useState('');
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
                setConfirmed(res.data.confirmed)
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
      window.alert('Password do not match')
    } else {
      axios.post('/api/users', {email, password, name, role}).then(
        res => {
          session && session.role === 'admin' ? window.location.reload() :
          createSession(res.data)
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
        <div>
        <Form.Label>Role</Form.Label>
          <Form.Control 
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
      </Form.Control>
        </div>
    )

  return (
    <Form>
    {session && session.role === 'admin' ?
      AdminForm : ''
    }
    <Form.Label>Name</Form.Label>
    <Form.Control
        name='name'
        type='name'
        onChange={(e) => handleChange(setName, e.target.value)}
        value={name}
        required
      />
      <Form.Label>Email</Form.Label>
    <Form.Control
        name='email'
        type='email'
        onChange={(e) => handleChange(setEmail, e.target.value)}
        value={email}
        label='Email'
        required
      /> 
  {
    id === 'new' ? (
    <Fragment>
    <Form.Label>Password</Form.Label>
      <Form.Control
      name='password'
      type='password'
      onChange={(e) => handleChange(setPassword, e.target.value)}
      value={password}
      label='Password'
      required
    />
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control
      name='password2'
      type='password'
      onChange={(e) => handleChange(setPassword2, e.target.value)}
      value={password2}
      label='Confirm Password'
      required
    />
    
    {session && session.role !== 'admin' ?
    
    <div>
    <hr />
    <Form.Label>Choose your role</Form.Label>
    <Form.Control 
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
    </Form.Control>
    </div> : ''
  }
    <br />
    <button onClick={e => createUser(e)} type="submit" className="btn btn-primary">Submit</button> 
    </Fragment>
    ) :
    <button onClick={e => updateUser(e)} type="submit" className="btn btn-primary">Submit</button>
  }
  </Form>
    );
}

export default Register;