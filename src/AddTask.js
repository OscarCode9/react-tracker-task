import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [reminder, setReminder] = useState();
  const [text, setText] = useState();
  const [day, setDay] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a taks");
    } else {
      onAdd({
        reminder,
        text,
        day,
      });
      
      setDay("");
      setReminder(false);
      setText("");
    }
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add task "
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time "
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          placeholder="Add task "
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input
        className="btn btn-block"
        type="submit"
        name=""
        id=""
        value={"Save Task"}
      />
    </form>
  );
};

export default AddTask;
