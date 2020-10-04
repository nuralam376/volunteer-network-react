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

  const deleteEventFromList = (id) => {
    fetch("http://localhost:5000/volunteer/event/delete", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Event deleted successfully");
          const remainningVolunteers = volunteers.filter(
            (volunteer) => volunteer._id !== id
          );
          setVolunteers(remainningVolunteers);
        } else {
          alert("Event deletion failed");
        }
      })
      .catch(() => alert("Something went wrong"));
  };

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
            <VolunteerList
              key={volunteer._id}
              volunteer={volunteer}
              deleteEventFromList={deleteEventFromList}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VolunteerLists;
