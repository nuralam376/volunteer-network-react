import React from "react";
import { Button } from "react-bootstrap";
import Tasks from "../Tasks/Tasks";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
      <div id="searcbox" className="w-25 mx-auto mt-4 d-flex">
        <input type="text" placeholder="Search" className="form-control" />
        <Button>Search</Button>
      </div>
      <Tasks />
    </div>
  );
};

export default Home;
