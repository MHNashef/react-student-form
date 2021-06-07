import { Form } from "react-bootstrap";

function ErrorMsgs({ errors }) {
  return errors.map((error, idx) => (
    <Form.Text key={idx} className="text-danger">
      {error}
    </Form.Text>
  ));
}

export default ErrorMsgs;
