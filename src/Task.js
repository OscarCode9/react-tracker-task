import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ task, onDeleteTask, onToggle }) {
  return (
    <div  className={`task ${task.reminder ? "reminder" : ""} `}>
      <h3 >
       <span onClick={() => onToggle(task.id)}> {task.title}</span>  <FaTimes onClick={() => onDeleteTask(task.id)} />
      </h3>
    </div>
  );
}
