"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import style from "@/css/contact.module.css";

const Contact = () => {
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  // alert state
  const [successAlert, setSuccessAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && number !== "") {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setSuccessAlert(true);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      setDangerAlert(true);
    }
  };

  if (successAlert === true) {
    setTimeout(() => setSuccessAlert(false), 5000);
  }

  if (dangerAlert === true) {
    setTimeout(() => setDangerAlert(false), 5000);
  }

  return (
    <section className={`py-5 bg-dark text-white`} id="contact">
      <h2 className="my-5 text-center">
        <span className="fw-lighter">Get</span>{" "}
        <span className="fw-bolder">in Touch</span>
      </h2>

      <Container>
        <Row>
          <Col md={6} className="">
            <h4 className="fw-light mb-4">Get In Touch</h4>
            <Form ref={form} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  className={`${style.input}`}
                  required
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className={`${style.input}`}
                  required
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className={`${style.input}`}
                  type="number"
                  placeholder="Your Phone"
                  name="user_number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={`${style.input}`}
                  type="text"
                  as="textarea"
                  rows={9}
                  placeholder="Write a message"
                  name="user_message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button className={`${style.button} mt-4`} type="submit">
                SEND MESSAGE
              </Button>
              <Alert
                show={successAlert}
                variant="success"
                onClose={() => setSuccessAlert(false)}
                dismissible
                className="mt-4"
              >
                Message send successesfully
              </Alert>
              <Alert
                show={dangerAlert}
                variant="danger"
                onClose={() => setDangerAlert(false)}
                dismissible
                className="mt-4"
              >
                Please Fill all field
              </Alert>
            </Form>
          </Col>
          <Col md={6}>
            <h4 className="fw-light mt-5 mt-md-0 mb-4 ms-md-4">
              My Contact Details
            </h4>
            <div
              className={`${style.contact} fw-light ms-md-4 py-md-4 align-self-center`}
            >
              <h6>Email</h6>
              <p className="mb-4">najmulislam519@gmail.com</p>

              <h6>Phone</h6>
              <p className="mb-4">+88 01826 512120</p>

              <h6>Current Address</h6>
              <p>Chhagalnaiya, Feni, Bangladesh.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
