import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Task } from '../Task';
import { deleteTask, initTask, toggleTask } from '../../store/actions/actions';

class Tasks extends Component {

  componentDidMount = () => {
    this.props.onInit();
  }

  handleDelete = (id) => {
    this.props.onDelete(id);
  }

  renderTasks = () => {
    console.log(this.props)
    return this.props.tasks.map((task, i) =>
      <Task key={i} task={task}
        delete={() => this.handleDelete(task.id)}
      />);
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deleteTask(id)),
    onInit: (taksName) => dispatch(initTask(taksName)),
    onToggle: (id) => dispatch(toggleTask(id))
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  }
}

const tasksConnect = connect(mapStateToProps, mapDispatchToProps)(Tasks);
export { tasksConnect as Tasks };