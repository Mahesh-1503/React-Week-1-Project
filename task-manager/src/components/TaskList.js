// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onUpdateStatus, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length ? (
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

export default TaskList;
