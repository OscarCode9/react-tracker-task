import React from "react";
import Task from "./Task";


const Tasks = ({ tasks, onDeleteTask, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
       <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onToggle={onToggle} ></Task>
      ))}
    </div>
  );
};

Tasks.defaultPropos = {
  tasks: [],
};

export default Tasks;
