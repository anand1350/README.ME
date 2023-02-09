import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// import { useNavigate } from "react-router-dom";

const TOAST_CONFIG = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  theme: "colored",
};

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const navigate = useNavigate();

  const submitSignup = () => {
    let status = 200;
    fetch("https://demo-api-one.vercel.app/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, repassword }),
    })
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then((data) => {
        if (status !== 200) {
          toast.error(data.message, TOAST_CONFIG);
        } else {
          toast.success(data.message, TOAST_CONFIG);
          setTimeout(() => {
            navigate("/signin");
          }, 1000);
        }
      })
      .catch((err) => {
        toast.error(err.message, TOAST_CONFIG);
      });
  };

  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                submitSignup();
              }}
            >
              <h1>Бүртгүүлэх</h1>
              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control placeholder="FirstName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control placeholder="LastName" />
                </Form.Group>

                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group
                  className="mt-4"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group
                  className="mt-4"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Password repeat</Form.Label>
                  <Form.Control
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                    type="password"
                    placeholder="Password repeat"
                  />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <ToastContainer />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
