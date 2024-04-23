import React, { useContext, useMemo } from "react";

import styles from "./Header.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);
  const totalDone = useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks]
  );
  const totalPending = useMemo(
    () => tasks.filter((task) => !task.done).length,
    [tasks]
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem-vinda, Patricia!</span>
        </div>
        <div>
          <StatsCard title={"Total de Tarefas"} value={tasks.length} />
          <StatsCard title={"Tarefas Pendentes"} value={totalPending} />
          <StatsCard title={"Tarefas Concluídas"} value={totalDone} />
        </div>
      </div>
    </header>
  );
};
