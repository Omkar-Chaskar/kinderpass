import React from 'react';
import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <Form className="text-center w-100"  id="main-container">
        <h1 className="mb-3 fs-3 fw-normal">log In</h1>
        <Form.Group controlId="log-in-email-address">
          <Form.Control
            type="email"
            size="lg"
            placeholder="Email address"
            autoComplete="username"
            className="position-relative mt-1"
          />
        </Form.Group>
        <Form.Group controlId="log-in-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Enter Password"
            autoComplete="current password"
            className="position-relative mt-1"
          />
        </Form.Group>
        <div className="d-grid mt-3">
          <Button variant="primary" size="lg">
            Sign Up
          </Button>
        </div>
      </Form>
  )
}
