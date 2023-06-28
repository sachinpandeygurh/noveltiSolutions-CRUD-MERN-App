import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddUser = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission and user creation
    console.log(userData);
  };

  return (
    <div className="container mt-5">
        <h2 className="me-5 pe-5">Add User</h2>
    <Form className="d-flex flex-wrap" onSubmit={handleSubmit}>
      <Form.Group className="col-12 col-md-5 m-1" controlId="firstName">
        <Form.Control
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </Form.Group>

      <Form.Group className="col-12 col-md-5 m-1" controlId="lastName">
        <Form.Control
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </Form.Group>

      <Form.Group className="col-12 col-md-5 m-1" controlId="email">
        <Form.Control
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email Id"
          required
        />
      </Form.Group>

      <Form.Group className="col-12 col-md-5 m-1" controlId="mobileNo">
        <Form.Control
          type="tel"
          name="mobileNo"
          value={userData.mobileNo}
          onChange={handleChange}
          placeholder="Mobile No"
          required
        />
      </Form.Group>

      <Form.Group className="col-12 col-md-5 m-1" controlId="address1">
        <Form.Control
          type="text"
          name="address1"
          value={userData.address1}
          onChange={handleChange}
          placeholder="Address 1"
          required
        />
      </Form.Group>

      <Form.Group className="col-12 col-md-5 m-1" controlId="address2">
        <Form.Control
          type="text"
          name="address2"
          value={userData.address2}
          onChange={handleChange}
          placeholder="Address 2"
        />
      </Form.Group>

      <Form.Group className="col-12 col-md-5 m-1" controlId="state">
        <Form.Control
          type="text"
          name="state"
          value={userData.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
      </Form.Group>

      <Form.Group className="col-12 col-md-5 m-1" controlId="city">
        <Form.Control
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
      </Form.Group>

      <Form.Group className="col-12 col-md-5 m-1" controlId="zipCode">
        <Form.Control
          type="text"
          name="zipCode"
          value={userData.zipCode}
          onChange={handleChange}
          placeholder="Country Zip Code"
          required
        />
      </Form.Group>

      <div className="col-10">
        <Button variant="primary" className="" type="submit">
          Add User
        </Button>
      </div>
    </Form>
  </div>
  );
};

export default AddUser;
