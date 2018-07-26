import * as actionTypes from '../actions/action-types';
import { updateObject } from '../../utility';


const initialState = {
  tasks: []
};

const addTask = (state, action) => {
  console.log(state)
  const newstate = updateObject(state, {tasks: state.tasks.concat(action.task)});
  console.log(newstate)

  return newstate;
};

const deleteTask = (state, action) => {
  const tasks = { tasks: state.tasks.filter(task => task.id !== action.id) };
  return updateObject(state, tasks);
};

const loadTask = (state, action) => {
  const tasks = { tasks: action.tasks }
  return updateObject(state, tasks);
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return addTask(state, action);
    case actionTypes.DELETE_TASK:
      return deleteTask(state, action);
    case actionTypes.LOAD_TASKS:
      return loadTask(state, action);
    default:
      return state;
  }
};