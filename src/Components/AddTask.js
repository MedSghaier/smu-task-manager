import { useState } from "react";

const AddTask = () => {
  let [taskName, setTaskName] = useState("");

  //   Array of tasks
  const [tasks, setTasks] = useState(["Eat", "Sleep", "Drink", "Code"]);

  const onChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (taskName.length) {
      setTasks([...tasks, taskName]);
    }
  };

  const removeTask = (targetTask) => {
    setTasks(tasks.filter((task) => task !== targetTask));
  };
  return (
    <div className="App">
      <>
        <input type="text" onChange={onChange} value={tasks[0]} />
        <button onClick={handleAddTask}>Add task!!!!</button>
        <ul>
          {tasks.map((task) => (
            <li key={task}>
              {task}{" "}
              <button onClick={() => removeTask(task)}>Remove Task</button>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default AddTask;
