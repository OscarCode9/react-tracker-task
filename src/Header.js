import React from "react";
import Button from "./Button";

const Header = ({setShowAddTask, showAddTask, title}) => {
  const onClick = (e) => {
    setShowAddTask(currentValue => {
      return !currentValue
    })
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button showAddTask={showAddTask} onClick={onClick}></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
