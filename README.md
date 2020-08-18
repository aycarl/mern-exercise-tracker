# A Simple Exercise Tracker built with the MERN stack

## Project Status
This is a simple full stack MERN application that I created for learning purposes.

## Back End

The backend server was written with the [Express](https://expressjs.com/) framework. The [Mongoose](https://mongoosejs.com/) library was used in modeling the mongoDB schemas for the web application.

### Set Up

To start the server:

* navigate to the `/backend` directory
* run `yarn install`
* run `nodemon server`

Runs the server on `http://localhost:5000`

## Front End

The frontend is a react application bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Notable Dependencies include:

    axios
    react-bootstrap
    react-datepicker
    react-router-dom

View the [package.json](https://github.com/aycarl/mern-exercise-tracker/blob/master/package.json) file for others.

### Set Up

Ensure you have the backend server running if you want to use the apps functionality. <br/>
In the project root directory:

* run `yarn install`

* run `yarn start`

Runs the app in the development mode.<br />
Open `http://localhost:3000` to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.