import React from "react";
import { Card } from "react-bootstrap";

export default function CardDisplay({ id, students }) {
  const studentToDisplay = students.filter(
    (studentObj) => studentObj.id === id
  );

  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-3" bg="dark" text="light">
        <Card.Header>Student Info</Card.Header>
        <Card.Body>
          <Card.Title> {studentToDisplay.username} </Card.Title>
          <Card.Text>Email: {studentToDisplay.email}</Card.Text>
          <Card.Text>Address: {studentToDisplay.address}</Card.Text>
          <Card.Text>Course: {studentToDisplay.course}</Card.Text>
          <Card.Text>Gender: {studentToDisplay.gender}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
