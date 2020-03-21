import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

const FormInput = ({ handleChange, label, ...props }) => (
  <Fragment>
    <Form.Label>{label}</Form.Label>
    <Form.Control onChange={handleChange} {...props} />
  </Fragment>
);

export default FormInput;