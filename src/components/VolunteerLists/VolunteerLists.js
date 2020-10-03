import React from "react";
import { Button, Table } from "react-bootstrap";

const VolunteerLists = () => {
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
          <tr>
            <td>Sufi Ahmed</td>
            <td>sufi@gmail.com</td>
            <td>22-10-2020</td>
            <td>Organize books at the library</td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>Sufi Ahmed</td>
            <td>sufi@gmail.com</td>
            <td>22-10-2020</td>
            <td>Organize books at the library</td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>Sufi Ahmed</td>
            <td>sufi@gmail.com</td>
            <td>22-10-2020</td>
            <td>Organize books at the library</td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default VolunteerLists;
