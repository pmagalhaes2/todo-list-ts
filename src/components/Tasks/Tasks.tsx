import React, { ChangeEvent, FormEvent, useContext, useState } from "react";

import styles from "./Tasks.module.scss";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm";
import { TasksList } from "../TasksList/TasksList";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks } = useContext(TasksContext);

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    if (taskTitle.trim().length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de 3 caracteres!");
      emptyTaskInput();
      return;
    }

    const newTasks = [
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];

    setTasks(newTasks);

    localStorage.setItem("tasks", JSON.stringify(newTasks));

    emptyTaskInput();
  };

  const emptyTaskInput = () => {
    setTaskTitle("");
  };

  const handleChecked = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <section className={styles.container}>
      <AddTaskForm
        value={taskTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value)
        }
        onSubmit={handleAddTask}
      />

      {tasks.length ? (
        <TasksList tasks={tasks} onChange={handleChecked} />
      ) : (
        <h2>Não existem tarefas cadastradas!</h2>
      )}
    </section>
  );
};
