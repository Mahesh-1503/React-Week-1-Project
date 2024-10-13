// src/components/Task.js
import React from 'react';
import { toast } from 'react-toastify'; // Ensure toast is imported for notifications

const Task = ({ task, onUpdateStatus, onDeleteTask }) => {
  const { title, description, status, addedDate, completedDate } = task;

  // Define color based on status
  const statusColor =
    status === 'Pending' ? '#f44336' : // Red for pending
    status === 'Doing' ? '#ff9800' :   // Orange for doing
    '#4caf50';                        // Green for completed

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      onDeleteTask(task.id); // Call the onDeleteTask function passed from the parent component
      toast.success("Task deleted successfully"); // Notify user of successful deletion
    }
  };

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
      
      <button onClick={handleDelete}>Delete</button> {/* Use handleDelete for the delete action */}
    </div>
  );
};

export default Task;
