import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

function ReviewUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Contact Us</h2>
      {submitted && <Alert variant="success">Your review has been submitted successfully!</Alert>}
      <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Review</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Please enter your review" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ReviewUs;
