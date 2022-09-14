import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEmployes } from "../context";

export function UpdateEmployee(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const { state, dispatch, updateEmployeeHandler } = useEmployes();
  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="primary" size="sm" className='m-1' onClick={() =>{
            handleShow();
            dispatch({ type: "EDIT_EMPLOYEE", payload: props.employee })
        }}>Edit</Button>
      </div>

      <Modal show={show} onHide={() => {
            dispatch({ type: "CLEAR_EMPLOYEE" });
            handleClose();
          }}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="text-center w-100"
            id="main-container"
          >
            <Form.Group>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Employee First Name"
                className="position-relative mt-1"
                name="firstname"
                value={state.firstname}
                onChange={(e) =>
                    dispatch({ type: "SET_FIRsTNAME", payload: e.target.value })
                  }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Employee Last Name"
                className="position-relative mt-1"
                name="lastname"
                value={state.lastname}
                onChange={(e) =>
                    dispatch({ type: "SET_LASTNAME", payload: e.target.value })
                  }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Address"
                className="position-relative mt-1"
                name="address"
                value={state.address}
                onChange={(e) =>
                    dispatch({ type: "SET_ADDRESS", payload: e.target.value })
                  }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                size="lg"
                placeholder="City"
                className="position-relative mt-1"
                name="city"
                value={state.city}
                onChange={(e) =>
                    dispatch({ type: "SET_CITY", payload: e.target.value })
                  }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="date"
                size="lg"
                className="position-relative mt-1"
                name="dateofbirth"
                value={state.dateofbirth}
                onChange={(e) =>
                    dispatch({ type: "SET_DOB", payload: e.target.value })
                  }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                size="lg"
                placeholder="Enter Mobile Number"
                className="position-relative mt-1"
                name="number"
                value={state.number}
                onChange={(e) =>
                    dispatch({ type: "SET_NUMBER", payload: e.target.value })
                  }
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={() => {
            dispatch({ type: "CLEAR_EMPLOYEE" });
            handleClose();
          }}>
            Close
          </Button>
          <Button variant="primary"
          onClick={() => {
            updateEmployeeHandler(state ,state._id);
            dispatch({ type: "CLEAR_EMPLOYEE" });
            handleClose();
          }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}