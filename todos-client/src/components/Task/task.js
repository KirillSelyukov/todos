import React from 'react';

export const Task = (props) => {
  return (<li className={props.task.checked ? 'checked' : ''}>
    <button className='delete' onClick={() => props.delete(props.task._id)}>
      &times;
        </button>
    <input
      type='checkbox'
      readOnly
      checked={!!props.task.checked}
      onClick={() => props.toggle(props.task._id)}
    />
    <span className='text'>
      {props.task.text}
    </span>
  </li>
  );
};