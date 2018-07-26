
import React, { Component } from 'react';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { addTask } from '../../store/actions/actions';


class TasksForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  constructor() {
    super(...arguments);

    this.state = {
      title: '',
      description: ''
    };
  }

  clearInput = () => {
    this.setState({ title: '', description: '' });
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }
  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 27) this.clearInput();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const title = this.state.title.trim();
    const description = this.state.description.trim();
    if (title.length) {
      this.props.onAdd({title, description});
    }

    this.clearInput();
  }

  render() {
    return (
      <div className='container'>
        <header>
          <h1>Todo List</h1>
        </header>

        <form className='new-task' onSubmit={this.handleSubmit}>
          <input
            type='text'
            ref='textInput'
            onKeyUp={this.handleKeyUp}
            placeholder='Type to add new tasks'
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
          <input
            type='text'
            ref='textInput'
            onKeyUp={this.handleKeyUp}
            placeholder='Type to add tasks descriptions.'
            onChange={this.handleDescriptionChange}
            value={this.state.description}
          />
          <button type='submit'> ADD </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (task) => dispatch(addTask(task)),
  }
}

const tasksFormConnect = connect(null, mapDispatchToProps)(TasksForm);
export { tasksFormConnect as TasksForm };
