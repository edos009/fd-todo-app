import React, { useState } from "react";
import cx from "classnames";

import useTodo from "../../hooks/useTodo";
import FormAddTask from "../Forms/FormAddTask";
import CONSTANTS from "../../constants";

import styles from "./Todo.module.scss";

const { OPTIONS_TITLES } = CONSTANTS;

const Todo = () => {
  const [valueSelect, setValueSelect] = useState("All");
  const { tasks, addTask, deleteTask, isDoneTask } = useTodo([]);

  const showTasks = (task) => (
    <li key={task.id} className={styles.wrapper__item__task}>
      <div
        className={cx(styles.wrapper__item__task__box, {
          [styles.wrapper__item__task__done]: task.isDone,
        })}
      ></div>
      <p className={styles.wrapper__item__body}>{task.body}</p>
      <div className={styles.wrapper__item__control}>
        <input
          className={styles.wrapper__check__done}
          type="checkbox"
          id={task.body}
          value={task.isDone}
          checked={task.isDone}
          onChange={() => isDoneTask(task.id)}
        />
        <label
          className={styles.wrapper__check__done__label}
          htmlFor={task.body}
        ></label>
        <button
          className={styles.wrapper__btn__delete}
          onClick={() => deleteTask(task.id)}
        ></button>
      </div>
    </li>
  );

  const options = OPTIONS_TITLES.map((title, i) => (
    <option className={styles.wrapper__option} key={i} value={title}>
      {title}
    </option>
  ));

  const handlerSelect = ({ target: { value } }) => {
    setValueSelect(value);
  };

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.wrapper__inner}>
            <h1 className={styles.wrapper__title}>My To-Do List</h1>
            <div className={styles.wrapper__control}>
              <FormAddTask addTask={addTask} />
              <select
                className={styles.wrapper__select}
                value={valueSelect}
                onChange={handlerSelect}
              >
                {options}
              </select>
            </div>
            <ul className={styles.wrapper__list__tasks}>
              <>
                {valueSelect === "All"
                  ? tasks.map(showTasks)
                  : valueSelect === "Done"
                  ? tasks.filter((task) => task.isDone).map(showTasks)
                  : tasks.filter((task) => !task.isDone).map(showTasks)}
              </>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;
