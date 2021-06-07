import React from "react";
import { getStudents } from "./DAL/api";
import { Container, Table } from "react-bootstrap";

export default function StudentPage() {
  const students = getStudents();

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
              <tr key={idx}>
                {Object.keys(studentObj).map((key, idx) => (
                  <td key={idx}>{studentObj[key]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
