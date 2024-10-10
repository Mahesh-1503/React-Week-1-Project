// src/components/Task.js
import React from 'react';

const Task = ({ task, onUpdateStatus, onDeleteTask }) => {
  const { title, description, status, addedDate, completedDate } = task;

  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Added on: {addedDate}</p>
      {status === 'Completed' && <p>Completed on: {completedDate}</p>}
      
      <select value={status} onChange={(e) => onUpdateStatus(task.id, e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="Doing">Doing</option>
        <option value="Completed">Completed</option>
      </select>
      
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
