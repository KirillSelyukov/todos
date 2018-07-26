import * as actions from './action-types';

const addTask = (taskName) => {
    console.log('action.addTask.taskName:', taskName);
    return {
        type: actions.ADD_TASK,
        taskName
    }
}

const initTask = () => {
    return {
        type: actions.LOAD_TASKS,
    }
}

const deleteTask = (id) => {
    return {
        type: actions.DELETE_TASK,
        id
    }
}

const toggleTask = (id) => {
    return {
        type: actions.TOGGLE_TASK,
        id
    }
}

export { addTask, initTask, deleteTask, toggleTask };