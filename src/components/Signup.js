import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { initialSignUpData } from "../utils/constantData/authConstant";
import { useAuth } from "../context";
import { Toasters } from "./Toasters";

export default function Signup() {
  const [signUpData, setSignUpData] = useState(initialSignUpData);
  const { signUpHandler } = useAuth();

  const signupChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
      <Form className="text-center w-100"  id="main-container" onSubmit={(e) => e.preventDefault()}>
        <h1 className="mb-3 fs-3 fw-normal">Sign Up</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control
            type="email"
            size="lg"
            placeholder="Email address"
            className="position-relative mt-1"
            name="email"
            onChange={signupChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="sign-in-first-name">
          <Form.Control
            type="text"
            size="lg"
            placeholder="First Name"
            className="position-relative mt-1"
            name="firstname"
            onChange={signupChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="sign-in-last-name">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Last Name"
            className="position-relative mt-1"
            name="lastname"
            onChange={signupChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="sign-in-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Enter Password"
            className="position-relative mt-1"
            name="password"
            onChange={signupChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="sign-in-re-enter-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Confirm Password"
            className="position-relative mt-1"
            name="cofirmpassword"
            onChange={signupChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="sign-in-address">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Address"
            className="position-relative mt-1"
            name="address"
            onChange={signupChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="sign-in-company-name">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Company Name"
            className="position-relative mt-1"
            name="company"
            onChange={signupChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="sign-in-date-of-birth">
          <Form.Control
            type="date"
            size="lg"
            className="position-relative mt-1"
            name="datofbirth"
            onChange={signupChangeHandler}
            required
          />
        </Form.Group>
        <div className="d-grid mt-3">
          <Button variant="primary" size="lg" type="submit" onClick={(e) => {
                signUpHandler(signUpData);
              }}>
            Sign Up
          </Button>
        </div>
        < Toasters />
      </Form>
  );
}
