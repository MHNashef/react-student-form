import React from "react";
import LogIn from "./LogIn";
import { Modal } from "react-bootstrap";

export default function AddStudentModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Student Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LogIn />
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
