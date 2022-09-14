import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEmployes } from "../context";

export function ConfirmationModel(props) {
    
  const [confirmationShow, setConfirmationShow] = useState(false);
  const handleClose = () => setConfirmationShow(false);
  const handleShow = () => setConfirmationShow(true);

  const { dispatch, addNewEmployeeHandler ,updateEmployeeHandler ,trashEmployeeHandler} = useEmployes();
  return (
    <>
      <div className="d-flex justify-content-end">
        {props.btn==="removeEmployee"?(
            <Button variant="danger" size="sm" className='m-1'
          onClick={() => handleShow()}>
            {props.name}
        </Button> 
        ):(
        <Button variant="primary"
          onClick={() => handleShow()}>
            Save
        </Button>)
        }
      </div>

      <Modal size="sm" show={confirmationShow} onHide={() => {
            handleClose();
          }} >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Prompt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="">{props.msg}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger"  onClick={() => {
            handleClose();
          }}>
            Cancel
          </Button>
          <Button variant="success"
          onClick={() => {
            switch(props.btn){
                case "newEmployee": {
                    addNewEmployeeHandler(props.state);
                    dispatch({ type: "CLEAR_EMPLOYEE" });
                    break;
                }
                case "updateEmployee": {
                    updateEmployeeHandler(props.state ,props.id);
                    dispatch({ type: "CLEAR_EMPLOYEE" });
                    break;
                }
                case "removeEmployee": {
                    trashEmployeeHandler(props.employee, props.id);
                    break;
                }
                default : 
                    break;
            }
            handleClose();
          }}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
