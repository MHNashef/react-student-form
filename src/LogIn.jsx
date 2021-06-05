import React from "react";
import {
  Form,
  Col,
  Button,
  Container,
  InputGroup,
  Row,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";
import "./LogIn.css";

export default function LogIn() {
  return (
    <Container>
      <h1 style={{ color: "#0f6127", textAlign: "center" }}>Student Details</h1>
      <p style={{ color: "#0f6127", textAlign: "center" }}>
        Hello Student! Please fill in your details
      </p>
      <hr />
      <Form>
        <Row>
          <Col>
            <Form.Group as={Col} controlId="formGridUserName">
              <Form.Label className="formLabel">Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FaUser />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Enter Username" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Email</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="email" placeholder="Enter email" />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>

        <Col>
          <Form.Group controlId="formGridAddress">
            <Form.Label className="formLabel">Address</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaBuilding />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Street, Number, City, Zip"
              />
            </InputGroup>
          </Form.Group>
        </Col>

        <Row>
          <Col>
            <Form.Group as={Col} controlId="formGridCourse">
              <Form.Label className="formLabel">Course</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FaGraduationCap />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="select" defaultValue="Select Course">
                  <option>Select Course</option>
                  <option>JavaScript</option>
                  <option>React JS</option>
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>Python</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col>
            <p className="formLabel">Gender</p>
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton
                variant="outline-success"
                id="tbg-female"
                value="Female"
              >
                Female
              </ToggleButton>
              <ToggleButton
                variant="outline-success"
                id="tbg-male"
                value="Male"
              >
                Male
              </ToggleButton>
              <ToggleButton
                variant="outline-success"
                id="tbg-other"
                value="Other"
              >
                Other
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>

        <Col>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Col>
      </Form>
    </Container>
  );
}
