import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
      <Form className="text-center w-100"  id="main-container">
        <h1 className="mb-3 fs-3 fw-normal">Sign Up</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control
            type="email"
            size="lg"
            placeholder="Email address"
            autoComplete="username"
            className="position-relative mt-1"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-first-name">
          <Form.Control
            type="text"
            size="lg"
            placeholder="First Name"
            autoComplete="firstname"
            className="position-relative mt-1"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-last-name">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Last Name"
            autoComplete="lastname"
            className="position-relative mt-1"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Enter Password"
            autoComplete="current password"
            className="position-relative mt-1"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-re-enter-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Confirm Password"
            autoComplete="secondary password"
            className="position-relative mt-1"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-address">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Address"
            autoComplete="address"
            className="position-relative mt-1"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-company-name">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Company Name"
            autoComplete="companyname"
            className="position-relative mt-1"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-date-of-birth">
          <Form.Control
            type="date"
            size="lg"
            className="position-relative mt-1"
          />
        </Form.Group>
        <div className="d-grid mt-3">
          <Button variant="primary" size="lg">
            Sign Up
          </Button>
        </div>
      </Form>
  );
}
