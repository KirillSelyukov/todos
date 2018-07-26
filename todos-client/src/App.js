import React, { Component } from "react";
import "./App.css";
import { Tasks } from "./components/Tasks";
import { TasksForm } from './components/Tasks-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TasksForm />
        <Tasks />
      </div>
    );
  }
}

export default App;
