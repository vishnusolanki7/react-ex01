import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik, formik } from 'formik';

const SignupForm = () => {

  const formik = useFormik({
    initialValues: {
      name:   '',
      number: '',
      owner:  '',
      line:   '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })


  return (

    <Form onSubmit={formik.handleSubmit}>
      <Row className="m-2">
        <Form.Group as={Col} xs={3}>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            id="name"
            // name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name} 
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group as={Col} xs={3}>
          <Form.Label >Number</Form.Label>
          <Form.Control 
            id="number"
            name="number"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.number}
            placeholder="Enter Number"
          />
        </Form.Group>

        <Form.Group as={Col} xs={3}>
          <Form.Label>Owner</Form.Label>
          <Form.Control
            id="owner"
            name="owner"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.owner} 
            placeholder="Enter Owner"
          />
        </Form.Group>

      </Row>
      <Row className="m-2">
        
        <Form.Group as={Col} xs={3} >
          <Form.Label>Line</Form.Label>
          <Form.Select
            id="line"
            name="line"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.line}
           >
            
            <option value="0">Choose...</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <Button className="m-2" xs={4} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
export default SignupForm;