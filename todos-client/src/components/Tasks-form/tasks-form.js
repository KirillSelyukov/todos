
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

    this.state = { title: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearInput() {
    this.setState({ title: '' });
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleKeyUp(event) {
    if (event.keyCode === 27) this.clearInput();
  }

  handleSubmit(event) {
    event.preventDefault();

    const text = this.state.title.trim();
    if (text.length) {
      this.props.onAdd(text);
    }

    this.clearInput();
  }

  render() {
    return (
      <div className='container'>
        <header>
          <h1>Todo List</h1>
        </header>

        <form className='new-task' onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            ref='textInput'
            placeholder='Type to add new tasks'
            onChange={this.handleChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (taksName) => dispatch(addTask(taksName)),
  }
}

const tasksFormConnect = connect(null, mapDispatchToProps)(TasksForm);
export { tasksFormConnect as TasksForm };
