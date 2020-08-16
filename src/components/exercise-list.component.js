import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Table, Button } from "react-bootstrap";

class ExerciserList extends Component {
  state = {
    exercises: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/exercises").then((response) => {
      if (response.data) {
        this.setState({
          exercises: response.data,
        });
      }
    });
  }

  deleteExercise = (id) => {
    axios.delete(`http://localhost:5000/exercises/${id}`)
      .then(res => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter(exercise => exercise._id !== id)
    });
  }

  render() {
    const { exercises } = this.state;
    
    return (
      <div className="page-content">
        <h4>List of Exercises:</h4>
        {exercises ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Username</th>
                <th>description</th>
                <th>duration</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise) => (
                <tr key={exercise._id}>
                  <td>{exercise.username}</td>
                  <td>{exercise.description}</td>
                  <td>{exercise.duration}</td>
                  <td>
                    <Link to={`/edit/${exercise._id}`}>
                      <Button variant="outline-primary">Edit</Button>
                    </Link>
                    {" "}
                    <Button
                      variant="outline-danger"
                      onClick={() => {this.deleteExercise(exercise._id)}}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          "No Exercises logged"
        )}
      </div>
    );
  }
}

export default ExerciserList;
