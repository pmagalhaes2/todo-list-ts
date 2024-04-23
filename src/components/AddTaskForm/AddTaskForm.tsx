import React, { ChangeEvent, FormEventHandler } from "react";

import styles from "./AddTaskForm.module.scss";

interface AddTaskFormProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div>
        <label htmlFor="task-title">Adicionar Tarefa</label>
        <input
          value={value}
          type="text"
          id="task-title"
          placeholder="Título da Tarefa"
          onChange={onChange}
        />
      </div>

      <button>Adicionar</button>
    </form>
  );
};
