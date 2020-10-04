import React from "react";
import { Button } from "react-bootstrap";

const VolunteerList = ({ volunteer, deleteEventFromList }) => {
  const { _id, fullname, email, date, event } = volunteer;
  const { name } = event;

  return (
    <tr>
      <td>{fullname}</td>
      <td>{email}</td>
      <td>{new Date(date).toDateString()}</td>
      <td>{name}</td>
      <td>
        <Button variant="danger" onClick={() => deleteEventFromList(_id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default VolunteerList;
