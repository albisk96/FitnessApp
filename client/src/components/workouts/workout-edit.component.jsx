import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap'
import { useAuth } from '../../contexts';

const Register = ({ id }) => {

    const [address, setAddress] = useState('');
    const [level, setLevel] = useState('');
    const [title, setTitle] = useState('');
    const [entries, setEntries] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        function getWorkouts(){
        axios.get(`/api/workouts/${id}`)
        .then(
            res => {
                setAddress(res.data.address)
                setLevel(res.data.level)
                setTitle(res.data.title)
                setEntries(res.data.entries)
                setDescription(res.data.description)
            }
        ).catch(function(err){
            console.log(err)
        })
    } 
      getWorkouts()
    }, [])

    
  function updateWorkout(e){
    e.preventDefault();
    axios.put(`/api/workouts/${id}`, {address, level, title, entries, description}).then(
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

  return (
    <Form>

    <Form.Label>Address</Form.Label>
    <Form.Control
        name='address'
        type='text'
        onChange={(e) => handleChange(setAddress, e.target.value)}
        value={address}
        required
      />

    <Form.Label>Title</Form.Label>
    <Form.Control
        name='title'
        type='text'
        onChange={(e) => handleChange(setTitle, e.target.value)}
        value={title}
        label='title'
        required
      /> 
     
    <Form.Label>Entries</Form.Label>
      <Form.Control
      name='entries'
      type='number'
      onChange={(e) => handleChange(setEntries, e.target.value)}
      value={entries}
      label='Entries'
      required
    />

    <Form.Label>Description</Form.Label>
      <Form.Control
      name='description'
      type='text'
      onChange={(e) => handleChange(setDescription, e.target.value)}
      value={description}
      label='Description'
      required
    />

    <Form.Label>Choose level</Form.Label>
    <Form.Control 
        label="Whats is your main goal?"
        type="level" 
        as='select' 
        name="level" 
        value={level} 
        onChange={e => setLevel(e.target.value)}
    >
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
    </Form.Control>

    <button onClick={e => updateWorkout(e)} type="submit" className="btn btn-primary">Submit</button>

  </Form>
    );
}

export default Register;