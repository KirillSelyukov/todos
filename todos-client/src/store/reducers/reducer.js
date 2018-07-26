import * as actionTypes from '../actions/action-types';

const initialState = [
  { _id: 0, text: 'This is task 0', checked: false },
  { _id: 1, text: 'This is task 1', checked: false },
  { _id: 2, text: 'This is task 2', checked: false }
];

const addTask = (state, action) => {
  const task = {
    _id: state.length,
    text: action.taskName
  }
  return [...state, task];
};

const deleteTask = (state, action) => {
  const newState = state.filter(task => task._id !== action.id);
  return newState;
};

const loadTask = (state) => {
  return state;
};
const toggleTask = (state, action) => {
  if (state._id !== action.id) {
    return state;
  }

  return {
    ...state,
    checked: !state.checked
  };
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return addTask(state, action);
    case actionTypes.DELETE_TASK:
      return deleteTask(state, action);
    case actionTypes.LOAD_TASKS:
      return loadTask(state);
    case actionTypes.TOGGLE_TASK:
      return state.map(task => toggleTask(task, action));
    default:
      return state;
  }
};