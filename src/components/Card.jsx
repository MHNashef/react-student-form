import React from "react";
import getStudents from "../DAL/api";

export default function Card({ id, students, card }) {
    const studentToDisplay = students.filter(studentObj => (studentObj.id == id));
    console.log(students);
    console.log(studentToDisplay[0]);
    console.log(id);
  return (
    <>
      <Card style={{ width: "18rem" }}>
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
