import { useState } from "react";
const useTodo = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);

  return {
    tasks,
    addTask: (values, formikBag) => {
      const newTask = {
        id: Date.now(),
        body: values.body,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
      formikBag.resetForm();
    },
    deleteTask: (idTask) => {
      setTasks(tasks.filter((task) => task.id !== idTask));
    },
    isDoneTask: (idTask) => {
      setTasks(
        tasks.map((task) =>
          task.id === idTask ? { ...task, isDone: !task.isDone } : { ...task }
        )
      );
    },
  };
};

export default useTodo;
