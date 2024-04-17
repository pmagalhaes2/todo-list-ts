import React, { FormEvent, useEffect, useState } from "react";

import styles from "./Tasks.module.scss";

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

  return (
    <section className={styles.container}>
      <form>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>

        <button onClick={handleAddTask}>Adicionar</button>
      </form>

      {tasks.length ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" id={`task-${task.id}`} />
                {task.title}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Não existem tarefas cadastradas!</h2>
      )}
    </section>
  );
};
