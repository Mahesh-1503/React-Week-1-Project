// src/components/TaskList.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import Task from './Task';

const TaskList = ({ tasks, onUpdateStatus, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task 
            key={task.id} 
            task={task} 
            onUpdateStatus={onUpdateStatus} 
            onDeleteTask={onDeleteTask} 
          />
        ))
      ) : (
        <p>No tasks available. Add a task to get started!</p>
      )}
    </div>
  );
};

// PropTypes for type checking
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      status: PropTypes.string.isRequired,
      addedDate: PropTypes.string.isRequired,
      completedDate: PropTypes.string,
    })
  ).isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
