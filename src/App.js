import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddTask from "./AddTask";
import "./App.css";
import Header from "./Header";
import Tasks from "./Tasks";
import Footer from "./Footer";
import { hashCode } from "./utils";
import About from "./About";

const HOST = "http://localhost:5000/tasks/";
function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(true);
  const [errors, setErrors] = useState([]);

  const fetchTask = async () => {
    try {
      const request = await fetch("http://localhost:5000/tasks");
      const tasksResults = await request.json();
      setTasks([
        ...tasksResults.map((task) => ({
          ...task,
          day: new Date(),
        })),
      ]);
    } catch (error) {
      setErrors([...errors, error]);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${HOST}${id}`, {
        method: "DELETE",
      });
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
    } catch (error) {
      setErrors([...errors, error]);
    }
  };

  const onToggle = async (id) => {
    const requestTaskById = await fetch(`${HOST}${id}`);
    let taskByid = await requestTaskById.json();
    taskByid.reminder = !taskByid.reminder;

    const updateTaskRequest = await fetch(`${HOST}${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskByid),
    });

    const updateTaskResponse = await updateTaskRequest.json();

    const newTasks = tasks.map((task) =>
      task.id === updateTaskResponse.id
        ? {
            ...updateTaskResponse,
            reminder: updateTaskResponse.reminder,
          }
        : task
    );
    setTasks(newTasks);
  };

  const onAdd = async (task) => {
    const newTask = {
      userId: tasks.length + 1 + "users",
      id: String(hashCode(JSON.stringify(task) + tasks.length + 1)),
      title: task.text,
      completed: false,
      reminder: task.reminder,
      day: task.day,
    };

    try {
      const request = await fetch(HOST, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          id: newTask.id,
          title: newTask.title,
          completed: false,
        }),
      });
      await request.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      setErrors([...errors, error]);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const Main = (props) => (
    <>
      {showAddTask && <AddTask onAdd={onAdd} />}
      {!showAddTask && (
        <Tasks tasks={tasks} onDeleteTask={deleteTask} onToggle={onToggle} />
      )}
      <Footer></Footer>
    </>
  );
  return (
    <div className="container">
      <Header showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
