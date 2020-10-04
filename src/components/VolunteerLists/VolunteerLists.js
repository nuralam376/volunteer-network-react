import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import VolunteerList from "../VolunteerList/VolunteerList";

const VolunteerLists = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/volunteer/lists")
      .then((res) => res.json())
      .then((events) => setVolunteers(events))
      .catch(() => alert("Something went wrong"));
  }, []);
  return (
    <div>
      <h4>Volunteer register list</h4>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Registration Date</th>
            <th>Volunteer list</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <VolunteerList key={volunteer._id} volunteer={volunteer} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VolunteerLists;
