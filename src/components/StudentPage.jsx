import React, { useState } from "react";
import AddStudentModal from "./AddStudentModal";
import CardDisplay from "./CardDisplay";
import { getStudents } from "../DAL/api";
import { Container, Table, Button } from "react-bootstrap";

export default function StudentPage() {
  const [students, setStudents] = useState(getStudents());
  const [show, setShow] = useState(false);
  const [card, setCard] = useState(false);
  const [sortButton, setSortButton] = useState("Sort By Name");
  const [isSorted, setIsSorted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function sort() {
    if (!isSorted) {
      students.sort((a, b) => {
        return a.username < b.username ? -1 : 1;
      });

      setStudents([...students]);
      setSortButton("Unsort");
      setIsSorted(true);
    } else {
      students.sort((a, b) => {
        return a.id < b.id ? -1 : 1;
      });
      setStudents([...students]);
      setSortButton("Sort By Name");
      setIsSorted(false);
    }
  }

  return (
    <Container className="mt-5">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
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
              <tr
                key={idx}
                onClick={() => setCard({ show: !card.show, id: studentObj.id })}
              >
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
      <Button variant="primary" onClick={sort}>
        {sortButton}
      </Button>
      {
          card.show && <CardDisplay id={card.id} students={students}/>
      }
      <AddStudentModal show={show} handleClose={handleClose} />
    </Container>
  );
}
