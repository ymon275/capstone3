import React, { useState, useContext, useEffect } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import LightThemeButton from "./LightThemeButton";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const context = useContext(ThemeContext);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  if (context.themeColor === "light") {
    return (
      <Container className="w-50 m-auto mt-5 bg-dark">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
        <LightThemeButton></LightThemeButton>
      </Container>
    );
  } else if (context.themeColor === "dark") {
    return (
        <Container className="w-50 m-auto mt-5 bg-dark">
          <Card className="bg-dark text-light">
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2 text-light">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
          <LightThemeButton></LightThemeButton>
        </Container>
      );
  } else {
      return (
        <Container className="w-50 m-auto mt-5 bg-dark">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
          <LightThemeButton></LightThemeButton>
        </Container>
      );;
  }
}
