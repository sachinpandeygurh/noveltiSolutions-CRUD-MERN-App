import React from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

const id="123"

const Home = () => {
  return (
    <div className="container my-3 ">
        {/* <h2 className="my-3 ">User List</h2> */}

<div className="d-flex my-1 justify-content-between">
    <input type="text" className="rounded px-2 border-1 " placeholder="Search user here.."/>
    <Link type="button" className="rounded btn-primary btn fw-bold border  " to="/add">Add New User </Link>
</div>

      <Table striped bordered hover rounded>
        <thead className="table-secondary">
          <tr>
            <th>Sno.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Mobile No</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>State</th>
            <th>City</th>
            <th>Country Zip Code</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to={`/view/${id}`} className="btn btn-sm btn-success mx-1">View</Link>
              <Link to={`/update/${id}`} className="btn btn-sm btn-secondary mx-1">Update</Link>
              <Link to={`/delete/${id}`} className="btn btn-sm btn-danger mx-1">Delete</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Home;
