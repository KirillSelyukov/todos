import * as actions from './action-types';
import axios from '../../axios-todo';

const addTask = ({ title, description }) => {
    const task = {
        title: title,
        description: description,
        date: Date.now(),
        status: 0,
        subtasks: [''],
        checked: false
    }

    return dispatch => {
        axios.post('/tasks.json', task)
            .then(response => {
                task.id = response.data.name
                dispatch(addTaskSuccess(task));
            })
            .catch(error => {
                dispatch(addTaskFail(error));
            })
    }
}

const addTaskSuccess = (task) => {
    return {
        type: actions.ADD_TASK,
        task
    }
}

const addTaskFail = (error) => {

}

const initTask = () => {
//     axios.get('http://localhost:51210/api/todos/').then(({data}) => {
//         const fetchedTasks = [];
//         for (let key in data) {
//             fetchedTasks.push({
//                 ...data[key],
//                 id: key
//             });
//         }

//         dispatch(initTaskSuccess(fetchedTasks))
// })
return dispatch => {
    axios.get('http://localhost:51210/api/todos/').then(({data}) => {
        const fetchedTasks = [];
        for (let key in data) {
            fetchedTasks.push({
                ...data[key],
                id: key
            });
        }

        dispatch(initTaskSuccess(fetchedTasks))
})
    // axios.get('/tasks.json')
    //     .then(({ data }) => {
    //         const fetchedTasks = [];
    //         for (let key in data) {
    //             fetchedTasks.push({
    //                 ...data[key],
    //                 id: key
    //             });
    //         }

    //         dispatch(initTaskSuccess(fetchedTasks))
    //     })
    //     .catch(error => {
    //         // TODO:
    //     });
}

}
const initTaskSuccess = (tasks) => {
    return {
        type: actions.LOAD_TASKS,
        tasks
    }
}
const deleteTask = (id) => {
    return dispatch => {
        axios.delete('/tasks/' + id + '.json')
            .then(({ data }) => {

                dispatch(deleteTaskSuccess(id))
            })
            .catch(error => {
                // TODO:
            });
    }
}
const deleteTaskSuccess = (id) => {
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