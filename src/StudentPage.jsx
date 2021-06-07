import React, { useState } from "react";
import AddStudentModal from "./AddStudentModal";
import Card from "./Card";
import LogIn from "./LogIn";
import { getStudents } from "./DAL/api";
import { Container, Table, Button, Row, Col } from "react-bootstrap";

export default function StudentPage() {
  const students = getStudents();
  const [show, setShow] = useState(false);
  const [card, setCard] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="mt-5">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Course</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((studentObj, idx) => {
            return (
              <tr key={idx} onClick={() => setCard({show: !card.show, id: studentObj.id})}>
                {Object.keys(studentObj).map((key, idx) => (
                  <td key={idx}>{studentObj[key]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button variant="primary" className="mr-4" onClick={handleShow}>
        Add Student &#43;
      </Button>
      <Button variant="primary">Sort By Name</Button>
      {
          card.show && <Card id={card.id} students={students} />
      }
      <AddStudentModal show={show} handleClose={handleClose} />
    </Container>
  );
}
