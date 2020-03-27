import React, { Fragment } from 'react';
import { Form, Col } from 'react-bootstrap';
import { Formik } from 'formik';

export const InputFeedback = ({ error }) =>
  error ? <div style={{ color: 'red'}}>{error}</div> : null;

 const FormInput = ({ id, label, error, controlId, name, ...props }) => (
  <Form.Row>
    <Form.Group as={Col} md="12" controlId={controlId}>
      <Form.Label>{label}</Form.Label>

        <Form.Control 
        id={id} 
        name={name} 
        type="invalid"
        {...props} 
        />
        <InputFeedback error={error} />
    </Form.Group>
  </Form.Row>
);

export default FormInput;