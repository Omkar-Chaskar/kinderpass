import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import {
  initialLogInData
} from "../utils/constantData/authConstant";
import { useAuth } from "../context";
import { Toasters } from "./Toasters";
import { Link } from 'react-router-dom';

export default function Login() {
  const [logInData, setLogInData] = useState(initialLogInData);
  const { logInHandler } = useAuth();

  const logInChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogInData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Form className="text-center w-100"  id="main-container" onSubmit={(e) => e.preventDefault()}>
        <h1 className="mb-3 fs-3 fw-normal">Log In</h1>
        <Form.Group controlId="log-in-email-address">
          <Form.Control
            type="email"
            size="lg"
            placeholder="Email address"
            autoComplete="email"
            name="email"
            className="position-relative mt-1"
            onChange={logInChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="log-in-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Enter Password"
            autoComplete="password"
            name="password"
            className="position-relative mt-1"
            onChange={logInChangeHandler}
            required
          />
        </Form.Group>
        <div className="d-grid mt-3">
          <Button variant="primary" size="lg" type="submit" onClick={(e) => {
                logInHandler(logInData);
              }}>
            Log In
          </Button>
        </div>
        <section className="m-1">
          <Link to={"signup"} className="text-dark fw-bolder">I don't have account</Link>
        </section>
        <Toasters />
      </Form>
  )
}
