import React from "react";

import styles from "./TasksList.module.scss";

interface ITask {
  title: string;
  done: boolean;
  id: number;
}

interface TasksListProps {
  tasks: ITask[];
  onChange: (arg0: number) => void;
}

export const TasksList: React.FC<TasksListProps> = ({ tasks, onChange }) => {
  return (
    <ul className={styles.ul}>
      {tasks.map((task: ITask) => (
        <li key={task.id}>
          <label>
            <input
              checked={task.done}
              type="checkbox"
              id={`task-${task.id}`}
              onChange={() => onChange(task.id)}
            />
            <p className={task.done ? styles.checked : ""}>{task.title}</p>
          </label>
        </li>
      ))}
    </ul>
  );
};
