// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { toast } from 'react-toastify';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    toast.success('Task added successfully!');
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, status, completedDate: status === 'Completed' ? new Date().toLocaleDateString() : null } : task
    ));
    toast.info('Task status updated!');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.error('Task deleted!');
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onUpdateStatus={updateTaskStatus} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
