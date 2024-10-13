// src/components/Task.js
import React from 'react';

const Task = ({ task, onUpdateStatus, onDeleteTask }) => {
  const { title, description, status, addedDate, completedDate } = task;

  // Define color based on status
  const statusColor =
    status === 'Pending' ? '#f44336' : // Red for pending
    status === 'Doing' ? '#ff9800' :   // Orange for doing
    '#4caf50';                        // Green for completed

  return (
    <div 
      className="task" 
      style={{ borderLeft: `5px solid ${statusColor}` }} // Apply the border color
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={{ color: statusColor, fontWeight: 'bold' }}>
        Added on: {addedDate}
      </p>
      {status === 'Completed' && (
        <p style={{ color: statusColor, fontWeight: 'bold' }}>
          Completed on: {completedDate}
        </p>
      )}
      
      <select 
        value={status} 
        onChange={(e) => onUpdateStatus(task.id, e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Doing">Doing</option>
        <option value="Completed">Completed</option>
      </select>
      
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
