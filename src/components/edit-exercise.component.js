import React, { Component } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";
import { Form, Button } from "react-bootstrap";

class EditExerciseForm extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: "",
    };
  }

  componentDidMount() {
    const id = this.props.exerciseId;

    axios.get(`http://localhost:5000/exercises/${id}`).then((response) => {
      if (response.data) {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: Date.parse(response.data.date),
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

    const id = this.props.exerciseId;

    const exercise = {
      username,
      description,
      duration,
      date: Date(date).toString(),
    };

    axios
      .post(`http://localhost:5000/exercises/update/${id}`, exercise)
      .then((res) => console.log(res.data));
  };

  render() {
    const { username, description, duration, date } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="usernameControl">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            required
            onChange={this.handleChange}
          />
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
            Edit Exercise Log
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

const EditExercise = ({match}) => {
  return (
    <div className="page-content">
      <h4>Edit Exercise</h4>
      <EditExerciseForm exerciseId={match.params.id} />
    </div>
  );
};

export default EditExercise;
