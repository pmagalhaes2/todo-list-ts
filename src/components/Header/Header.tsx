import React from "react";

import styles from "./Header.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem-vinda, Patricia!</span>
        </div>
        <div>
          <StatsCard title={"Total de Tarefas"} value={5} />
          <StatsCard title={"Tarefas Pendentes"} value={4} />
          <StatsCard title={"Tarefas Concluídas"} value={1} />
        </div>
      </div>
    </header>
  );
};
