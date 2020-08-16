import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { Container } from 'react-bootstrap';

import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import NavigationBar from './components/navigation-bar.component';

function App() {
  return (
    <Container fluid className="App">
    <NavigationBar />
      <Switch>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </Switch>
    </Container>
  );
}

export default App;
