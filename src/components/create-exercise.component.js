import React, { Component } from "react";
import axios from "axios";

import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class CreateExerciseForm extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/users").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleDateChange = (date) => {
    this.setState({
      date: date,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, description, duration, date } = this.state;

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    axios
      .post('http://localhost:5000/exercises/add', exercise)
      .then((res) => console.log(res.data));
  };

  render() {
    const { username, description, duration, date, users } = this.state;

    console.log(username);

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="usernameControl">
          <Form.Label>username</Form.Label>
          <Form.Control as="select" name="username" defaultValue={username}>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="descriptionControl">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={description}
            required
            placeholder="enter type of exercise"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="durationControl">
          <Form.Label>duration</Form.Label>
          <Form.Control
            type="text"
            name="duration"
            required
            value={duration}
            placeholder="enter exercise duration"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="dateControl">
          <Form.Label>date</Form.Label>
          <br />
          <DatePicker selected={date} onChange={this.handleDateChange} />
        </Form.Group>
        <Form.Group>
          <Button type="submit" block>
            Create Exercise Log
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

const CreateExercise = () => {
  return (
    <div className="page-content">
      <h4>Create New Exercise Log</h4>
      <CreateExerciseForm />
    </div>
  );
};

export default CreateExercise;
