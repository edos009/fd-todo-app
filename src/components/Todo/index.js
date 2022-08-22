import React, { useState } from "react";
import useTodo from "../../hooks/useTodo";
import FormAddTask from "../Forms/FormAddTask";
import CONSTANTS from "../../constants";

const { OPTIONS_TITLES } = CONSTANTS;

const Todo = () => {
  const [valueSelect, setValueSelect] = useState("All");
  const { tasks, addTask, deleteTask, isDoneTask } = useTodo([]);

  const showTasks = (task) => (
    <li key={task.id}>
      <div>
        <p>{task.body}</p>
        <div>
          <input
            type="checkbox"
            id={task.body}
            value={task.isDone}
            checked={task.isDone}
            onChange={() => isDoneTask(task.id)}
          />
          <label htmlFor={task.body}></label>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      </div>
    </li>
  );

  const options = OPTIONS_TITLES.map((title, i) => (
    <option key={i} value={title}>
      {title}
    </option>
  ));

  const handlerSelect = ({ target: { value } }) => {
    setValueSelect(value);
  };

  return (
    <>
      <section>
        <FormAddTask addTask={addTask} />
        <ul>
          <>
            {valueSelect === "All"
              ? tasks.map(showTasks)
              : valueSelect === "Done"
              ? tasks.filter((task) => task.isDone).map(showTasks)
              : tasks.filter((task) => !task.isDone).map(showTasks)}
          </>
        </ul>
        <select value={valueSelect} onChange={handlerSelect}>
          {options}
        </select>
      </section>
    </>
  );
};

export default Todo;
