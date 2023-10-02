import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormComponentCss from "./FormComponent.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormComponent = () => {
  const [validated, setValidated] = React.useState(false);
  const [phone, setPhone] = React.useState("");

  const formSubmit = () => {
    alert("Form will work soon...");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    formSubmit();
  };

  return (
    <div className={FormComponentCss.container}>
      <div className={FormComponentCss.border}>
        <div className={FormComponentCss.form}>
          <div>
            <h2>Have questions? We'd love to answer them.</h2>
          </div>
          <div>
            <p>
              Help us with your requirements and we’ll get out workspace experts
              to reach out to you at the earliest.
            </p>
          </div>
          <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className={FormComponentCss.formRow}>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className={FormComponentCss.formField}
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className={FormComponentCss.formField}
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className={FormComponentCss.formRow}>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className={FormComponentCss.formField}
                >
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className={FormComponentCss.formField}
                >
                  <Form.Label>Work Email Address</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className={FormComponentCss.formRow}>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className={FormComponentCss.formField}
                >
                  <Form.Label>Mobile Number</Form.Label>
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(phone) => {
                      setPhone(phone);
                    }}
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className={FormComponentCss.formField}
                >
                  <Form.Label>Product</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option defaultValue>
                      Which Product suits your requirement?{" "}
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className={FormComponentCss.formRow}>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className={FormComponentCss.formField}
                >
                  <Form.Label>Location</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option defaultValue>Choose your preferred location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className={FormComponentCss.formField}
                >
                  <Form.Label>Center</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option defaultValue>Find a center </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className={FormComponentCss.formRow}>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className={FormComponentCss.formField}
                >
                  <Form.Label>Desks Requirement</Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="I hereby allow COWRKS to contact me via call and email."
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="I authorise COWRKS to share promotions and marketing related mailers via email."
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
