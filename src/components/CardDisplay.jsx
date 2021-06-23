import React from "react";
import { Card } from "react-bootstrap";

export default function CardDisplay({ id, students, card }) {
  const studentToDisplay = students.filter((studentObj) => studentObj.id == id);

  return (
    <>
      <Card style={{ width: "18rem" }} bg="dark" text="light">
        <Card.Body>
          <Card.Title>Student Info</Card.Title>
          <Card.Text>studentToDisplay.username</Card.Text>
          <Card.Text>studentToDisplay.email</Card.Text>
          <Card.Text>studentToDisplay.address</Card.Text>
          <Card.Text>studentToDisplay.course</Card.Text>
          <Card.Text>studentToDisplay.gender</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
