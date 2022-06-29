import React from "react";

function Button({ color, text, showAddTask, onClick }) {
  return (
    <div>
      <button
        className="btn"
        onClick={onClick}
        style={{
          background: `${showAddTask ? "red" : color}`,
        }}
      >
        {" "}
        {showAddTask ? "Close" : text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  color: "green",
  text: "Add",
};

export default Button;
