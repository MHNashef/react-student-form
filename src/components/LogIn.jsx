import React, { useState } from "react";
import {
  Form,
  Col,
  Button,
  Container,
  InputGroup,
  Row,
  ToggleButtonGroup,
  ToggleButton,
  ButtonGroup,
  Alert,
} from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";
import ErrorMsgs from "./ErrorMsgs";
import addStudent from "../DAL/api";
import "../LogIn.css";

export default function LogIn() {
  const [completeForm, setCompleteForm] = useState("");
  const [loginData, setLoginData] = useState({
    username: {
      value: "",
      errors: [],
      validations: {
        required: true,
        minLength: 2,
      },
    },
    email: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      },
    },
    address: {
      value: "",
      errors: [],
      validations: {
        required: true,
        minLength: 10,
      },
    },
    course: {
      value: "",
      errors: [],
      validations: {
        required: true,
      },
    },
    gender: {
      value: "",
      errors: [],
      validations: {
        required: true,
      },
    },
  });

  function validateInput({ target: { value, name } }) {
    const newErrors = [];
    const { validations } = loginData[name];

    if (validations.required && !value) {
      newErrors.push(`${name} is required`);
    }

    if (validations.pattern && !validations.pattern.test(value)) {
      newErrors.push(`${name} is invalid`);
    }

    if (validations.minLength && value.length < validations.minLength) {
      newErrors.push(
        `${name} should be no less than ${validations.minLength} characters`
      );
    }

    setLoginData({
      ...loginData,
      [name]: {
        ...loginData[name],
        value: value,
        errors: newErrors,
      },
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    let isValid = true;

    for (const input in loginData) {
      if (!loginData[input].value || loginData[input].errors.length > 0) {
        isValid = false;
      }
    }

    if (!isValid) {
      setCompleteForm("Please Complete Form Before Submitting");
    } else {
      setCompleteForm("");
      addStudent(loginData);
    }
  }

  return (
    <Container>
      <h1 style={{ color: "#0f6127", textAlign: "center" }}>Student Details</h1>
      <p style={{ color: "#0f6127", textAlign: "center" }}>
        Hello Student! Please fill in your details
      </p>
      <hr />
      <Row>
        <Col>
          {completeForm && (
            <Alert variant="danger" className="text-center">
              {completeForm}
            </Alert>
          )}
        </Col>
      </Row>
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
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  onChange={validateInput}
                />
              </InputGroup>
              <ErrorMsgs errors={loginData.username.errors} />
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
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={null}
                  onChange={validateInput}
                />
              </InputGroup>
              <ErrorMsgs errors={loginData.email.errors} />
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
                name="address"
                rows={2}
                placeholder="Street, Number, City, Zip"
                onChange={validateInput}
              />
            </InputGroup>
            <ErrorMsgs errors={loginData.address.errors} />
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
                <Form.Control
                  as="select"
                  name="course"
                  defaultValue="Select Course"
                  onChange={validateInput}
                >
                  <option value="">Select Course</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React JS">React JS</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="Python">Python</option>
                </Form.Control>
              </InputGroup>
              <ErrorMsgs errors={loginData.course.errors} />
            </Form.Group>
          </Col>

          <Col className="d-flex flex-column">
            <Form.Label className="formLabel">Gender</Form.Label>
            <ButtonGroup>
              <ToggleButtonGroup type="radio" name="gender">
                <ToggleButton
                  variant="outline-success"
                  id="tbg-female"
                  value="Female"
                  onChange={validateInput}
                >
                  Female
                </ToggleButton>
                <ToggleButton
                  variant="outline-success"
                  id="tbg-male"
                  value="Male"
                  onChange={validateInput}
                >
                  Male
                </ToggleButton>
                <ToggleButton
                  variant="outline-success"
                  id="tbg-other"
                  value="Other"
                  onChange={validateInput}
                >
                  Other
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonGroup>
            <ErrorMsgs errors={loginData.gender.errors} />
          </Col>
        </Row>

        <Col>
          <Button variant="primary" type="submit" onClick={onSubmit} block>
            Submit
          </Button>
        </Col>
      </Form>
    </Container>
  );
}
