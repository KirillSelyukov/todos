import React from 'react';

export const Task = (props) => {
  const getTaskStatusStyle = (status) => {
    switch (status) {
      case 0:
        return 'new';
      case 1:
        return 'inprogress';
      case 2:
        return 'done';
      default:
        return 'new';
    }
  }
  return (<li className={getTaskStatusStyle(props.task.status)}>
    <button className='delete' onClick={props.delete}>
      &times;
        </button>
    <span className='text'>
      {props.task.title}
    </span>
  </li>
  );
};