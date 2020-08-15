import React, { Component } from "react";
import axios from 'axios';

import { Form, Button } from "react-bootstrap";

class CreateUser extends Component {

  state = {
    username: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username } = this.state;

    const newUser = {
      username
    }

    axios.post('http://localhost:5000/users/add', newUser)
      .then(res => console.log(res.data));

    console.log(newUser);
  };

  render() {
    const { username } = this.state;
    return (
      <div className="page-content">
        <h4>Create a New User:</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="usernameControl">
            <Form.Label>username</Form.Label>
            <Form.Control 
              type="text"
              name="username"
              value={username}
              placeholder="enter a username"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit" block >Create New User</Button>
        </Form>
      </div>
    );
  }
}

export default CreateUser;
