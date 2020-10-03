import React from "react";
import { Button, Image } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div className="mt-5 login">
      <h1>Login With</h1>
      <div className="google mt-4">
        <Button variant="light">
          <Image src="/resources/Icon/google.png" />
          Continue with google
        </Button>
        <p>
          Don't have an account?{" "}
          <Button className="btn btn-light" variant="primary">
            Create an account
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;
