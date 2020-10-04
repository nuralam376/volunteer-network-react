import React from "react";
import { Button } from "react-bootstrap";

const VolunteerList = ({ volunteer }) => {
  const { _id, fullname, email, date, event } = volunteer;
  const { name } = event;

  const deleteFromList = (id) => {
    console.log(id);
  };

  return (
    <tr>
      <td>{fullname}</td>
      <td>{email}</td>
      <td>{new Date(date).toDateString()}</td>
      <td>{name}</td>
      <td>
        <Button variant="danger" onClick={() => deleteFromList(_id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default VolunteerList;
