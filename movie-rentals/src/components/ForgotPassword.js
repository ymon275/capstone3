import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import LightThemeButton from "./LightThemeButton";
import ThemeContext from "../contexts/ThemeContext";

export default function ForgotPassword() {
  const lightTheme = "bg-light text-dark";
  const darkTheme = "text-light bg-dark";
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  const context = useContext(ThemeContext);

  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for futher instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  useEffect(() => {
    setTheme(context.themeColor === "dark" ? darkTheme : lightTheme)
  }, [context.themeColor])

  return (
    <>
      <div className="container mt-5 w-100">
        <Card className={theme}>
          <Card.Body>
            <h2 className="text-center mb-4">Reset Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Reset Password
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/Login">Login</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center text-light mt-2">
          Need an account? <Link to="/SignUp">Sign Up</Link>
        </div>
      </div>
      <LightThemeButton></LightThemeButton>
    </>
  );
}
