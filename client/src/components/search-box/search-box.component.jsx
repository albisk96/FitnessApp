import React from 'react'
import { Form } from 'react-bootstrap'

export const SearchBox = props => {
    return (
        <div style={{ margin: '4% 40%'}}>
        <Form.Control 
        type="text"
        placeholder="search exercise"
        onChange={props.onChange}
        />
        </div>
    );
}
