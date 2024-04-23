import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import styles from "./Tasks.module.scss";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm";
import { TasksList } from "../TasksList/TasksList";

interface ITask {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const existingTasks = localStorage.getItem("tasks");
    existingTasks && setTasks(JSON.parse(existingTasks));
  }, []);

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
