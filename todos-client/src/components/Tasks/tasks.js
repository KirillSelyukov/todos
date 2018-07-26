import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Task } from '../Task';
import { deleteTask, initTask, toggleTask } from '../../store/actions/actions';

class Tasks extends Component {

  componentDidMount = () => {
    this.props.onInit();
  }

  handleDelete = (id) => {
    console.log(id);
    this.props.onDelete(id);
  }

  handleToggle = (id) => {
    console.log('handleToggle clicked');
    this.props.onToggle(id);

  }

  renderTasks = () => {
    console.log(this.props);
    return this.props.tasks.map((task,i) => <Task key={i} task={task} delete={this.handleDelete} toggle={this.handleToggle} />);
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
    tasks: state,
  }
}

const tasksConnect = connect(mapStateToProps, mapDispatchToProps)(Tasks);
export { tasksConnect as Tasks };